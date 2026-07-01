export const useNavLink = (destination, startNavigation) => {
  return () => {
    startNavigation(destination);
  };
};
