import useScreenSize from 'use-screen-size'
 

/**
 * @ScreenSize
 * @param {*} size 
 * @param {*} o 
 * @Extra small	<576px	xs
 * @Small ≥576px	s
 * @Medium ≥768px	m
 * @Large ≥992px	l
 * @Large ≥1200px	xl 
 */
export const ScreenSize = (screen) => {
  const size = useScreenSize();
  return  screen ?  size.screen===screen  : size
}