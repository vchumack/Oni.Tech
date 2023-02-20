import { useMediaQuery } from "react-responsive";

export const useMedia = () => {
	const isSmallDesktop = useMediaQuery({ query: "(min-width: 1100px)" });
	const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
	const isHighScreen = useMediaQuery({ query: "(min-height: 600px)" });
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	return { isTablet, isSmallDesktop, isHighScreen, isPortrait };
};
