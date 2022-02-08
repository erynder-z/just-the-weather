const getIcon = (condition) => {
  const iconTarget = condition.replace(/\s+/g, '').toLowerCase();
  return iconTarget;
};

export { getIcon };
