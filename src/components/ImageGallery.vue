<template>
  <div class="gallery-container">
    <!-- Image principale cliquable -->
    <div class="main-image" @click="openLightbox(0)">
      <img :src="images[0]" :alt="alt" />
      <div class="image-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
        <span>{{ images.length }} photos</span>
      </div>
    </div>

    <!-- Miniatures -->
    <div v-if="images.length > 1" class="thumbnails">
      <div
        v-for="(image, index) in images.slice(0, 4)"
        :key="index"
        class="thumbnail"
        :class="{ 'more': index === 3 && images.length > 4 }"
        @click="openLightbox(index)"
      >
        <img :src="image" :alt="`${alt} - ${index + 1}`" />
        <div v-if="index === 3 && images.length > 4" class="more-overlay">
          +{{ images.length - 4 }}
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="isOpen" class="lightbox" @click.self="closeLightbox">
          <div class="lightbox-backdrop" @click="closeLightbox"></div>

          <div class="lightbox-content">
            <!-- Close button -->
            <button class="lightbox-close" @click="closeLightbox">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <!-- Main image container -->
            <div class="lightbox-main">
              <!-- Previous button -->
              <button
                v-if="images.length > 1"
                class="lightbox-nav prev"
                @click.stop="prevImage"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>

              <!-- Current image -->
              <div class="lightbox-image-container">
                <Transition :name="slideDirection" mode="out-in">
                  <img
                    :key="currentIndex"
                    :src="images[currentIndex]"
                    :alt="`${alt} - ${currentIndex + 1}`"
                    class="lightbox-image"
                  />
                </Transition>
              </div>

              <!-- Next button -->
              <button
                v-if="images.length > 1"
                class="lightbox-nav next"
                @click.stop="nextImage"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            <!-- Counter -->
            <div class="lightbox-counter">
              {{ currentIndex + 1 }} / {{ images.length }}
            </div>

            <!-- Thumbnails bar -->
            <div v-if="images.length > 1" class="lightbox-thumbnails">
              <button
                v-for="(image, index) in images"
                :key="index"
                class="lightbox-thumb"
                :class="{ active: index === currentIndex }"
                @click.stop="goToImage(index)"
              >
                <img :src="image" :alt="`Miniature ${index + 1}`" />
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  alt: {
    type: String,
    default: 'Image'
  }
})

const isOpen = ref(false)
const currentIndex = ref(0)
const slideDirection = ref('slide-left')

const openLightbox = (index) => {
  currentIndex.value = index
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  slideDirection.value = 'slide-left'
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevImage = () => {
  slideDirection.value = 'slide-right'
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

const goToImage = (index) => {
  slideDirection.value = index > currentIndex.value ? 'slide-left' : 'slide-right'
  currentIndex.value = index
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!isOpen.value) return

  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowRight':
      nextImage()
      break
    case 'ArrowLeft':
      prevImage()
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.gallery-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
}

.main-image {
  position: relative;
  flex: 1;
  min-height: 200px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.main-image:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.main-image:hover .image-overlay {
  opacity: 1;
}

.image-overlay span {
  font-size: 0.9rem;
  font-weight: 500;
}

.thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}

.thumbnail {
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.thumbnail:hover img {
  transform: scale(1.1);
}

.more-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
}

.lightbox-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox-main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 1400px;
  gap: 1rem;
}

.lightbox-nav {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 200px);
  overflow: hidden;
}

.lightbox-image {
  max-width: 100%;
  max-height: calc(100vh - 200px);
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.lightbox-counter {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin: 1rem 0;
}

.lightbox-thumbnails {
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding: 0.5rem;
  max-width: 100%;
}

.lightbox-thumb {
  width: 70px;
  height: 50px;
  border: 2px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.3s ease;
  padding: 0;
  background: none;
  flex-shrink: 0;
}

.lightbox-thumb:hover {
  opacity: 0.8;
}

.lightbox-thumb.active {
  border-color: var(--primary-color, #c76d39);
  opacity: 1;
}

.lightbox-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Transitions */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

/* Responsive */
@media (max-width: 768px) {
  .lightbox-nav {
    width: 45px;
    height: 45px;
  }

  .lightbox-nav svg {
    width: 24px;
    height: 24px;
  }

  .lightbox-close {
    width: 40px;
    height: 40px;
    top: 0.5rem;
    right: 0.5rem;
  }

  .lightbox-thumb {
    width: 50px;
    height: 35px;
  }

  .thumbnails {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
