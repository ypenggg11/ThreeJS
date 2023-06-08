export const textVariant = (delay: any) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  }
}

export const fadeIn = (
  direction: string,
  type: any,
  delay: any,
  duration: any
) => {
  const getX = (dir: string): number => {
    let value: number

    if (dir === 'left') {
      value = 100
    } else if (dir === 'right') {
      value = -100
    } else value = 0

    return value
  }

  const getY = (dir: string): number => {
    let value: number

    if (dir === 'up') {
      value = 100
    } else if (dir === 'down') {
      value = -100
    } else value = 0

    return value
  }

  return {
    hidden: {
      x: getX(direction),
      y: getY(direction),
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }
}

export const zoomIn = (delay: any, duration: any) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }
}

export const slideIn = (
  direction: any,
  type: any,
  delay: any,
  duration: any
) => {
  const getX = (dir: string): string | number => {
    let value: string | number

    if (dir === 'left') {
      value = '-100%'
    } else if (dir === 'down') {
      value = '100%'
    } else value = 0

    return value
  }

  const getY = (dir: string): string | number => {
    let value: string | number

    if (dir === 'up') {
      value = '100%'
    } else if (dir === 'down') {
      value = '-100%'
    } else value = 0

    return value
  }

  return {
    hidden: {
      x: getX(direction),
      y: getY(direction),
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  }
}

export const staggerContainer = (staggerChildren: any, delayChildren: any) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  }
}
