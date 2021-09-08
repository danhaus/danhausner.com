export const getElementDimensions = (el: HTMLElement) => {
  const { height } = el.getBoundingClientRect();
  const offsetTop = el.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};
