import {
  ComputedRef,
  computed,
  onMounted,
  Ref,
  ref,
  unref,
  onUnmounted,
} from 'vue'
import { useRouter } from 'vue-router'
import { filterRouterByHidden } from '../utils/index'
import type { ProRouteRecordRaw } from '../types/index'

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

/**
 * toggle show
 * @param state init value (default `false`)
 */
export function useShow(
  state = false
): {
  show: Ref<boolean>
  toggleShow: () => void
} {
  const show = ref(state)

  function toggleShow() {
    show.value = !show.value
  }

  return {
    show,
    toggleShow,
  }
}

export function useHover(): {
  isHover: Ref<boolean>
  enter: () => void
  leave: () => void
} {
  const isHover = ref(false)

  function enter() {
    isHover.value = true
  }

  function leave() {
    isHover.value = false
  }

  return {
    isHover,
    enter,
    leave,
  }
}

export function useScroll(callback: () => void): void {
  onMounted(() => {
    window.addEventListener('scroll', callback)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', callback)
  })
}

export function useResize(callback: () => void): void {
  onMounted(() => {
    callback()
    window.addEventListener('resize', callback)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', callback)
  })
}

/** Gets the responsive breakpoint of the current screen */
export function useScreenSize(): Ref<ScreenSize> {
  const size = ref<ScreenSize>('xl')

  useResize(getScreenSize)

  function getScreenSize() {
    const width = document.body.clientWidth

    if (width >= 1920) {
      size.value = 'xl'
    } else if (width >= 1200) {
      size.value = 'lg'
    } else if (width >= 992) {
      size.value = 'md'
    } else if (width >= 768) {
      size.value = 'sm'
    } else {
      size.value = 'xs'
    }
  }

  return size
}

/**
 * routes with no value will get `vue-router` routes
 * @param routes router list
 */
export function useCurrentRoutes(
  routes?: ProRouteRecordRaw[] | Ref<ProRouteRecordRaw[]>
): ComputedRef<ProRouteRecordRaw[]> {
  const _routes = unref(routes)

  return computed(() => {
    if (_routes && _routes.length) {
      return _routes
    } else {
      const router = useRouter()
      const _routes = router.options.routes as ProRouteRecordRaw[]

      return filterRouterByHidden(_routes)
    }
  })
}