<?php
namespace SWELL_Theme;

// use \SWELL_Theme as SWELL;

defined( 'ABSPATH' ) || exit;

class SVG {

	/**
	 * svgアイコン 出力
	 */
	public static function the_svg( $icon_name, $attrs = [] ) {
		echo self::get_svg( $icon_name, $attrs ); // phpcs:ignore WordPress.Security.EscapeOutput
	}

	/**
	 * svgアイコン 取得
	 */
	public static function get_svg( $icon_name, $attrs = [] ) {
		if ( ! $icon_name ) return '';

		$path     = '';
		$size     = $attrs['size'] ?? '1em' ?: '1em';
		$class    = $attrs['class'] ?? '';
		$view_box = '0 0 40 40';

		switch ( $icon_name ) {
			case 'logo':
				$path = '<path d="M6.3 15.6c0 1.16-0.94 2.1-2.1 2.1s-2.1-0.94-2.1-2.1c0-1.16 0.94-2.1 2.1-2.1s2.1 0.94 2.1 2.1z"></path>
				<path d="M36.7 11.6c-1-2.2-3.7-3.9-6.9-3.3-3.6 0.7-5.4 2.9-7.8 5.9-2.7 3.4-5.5 7-9.4 8.5-1.4 0.6-2.8 0.8-4.3 0.8-1.1 0-2.3-0.2-3.5-0.5-0.7-0.2-1.5-0.5-2.3-0.8 2 7.9 9.2 13.8 17.8 13.6 9.8-0.2 17.7-8.3 17.7-18-0.1-2.1-0.4-4.3-1.3-6.2z"></path>';
				break;
			case 'tax':
				$path = '<path d="M36,14.4V8H20l-3.6-3.4H4v9.8H1.5l1,21h35l1-21H36z M7,7.6h8.2l3.6,3.4H33v3.4H7V7.6z M34.5,32.4h-29l-1-15h31L34.5,32.4z" />';
				break;
			case 'chevronRight':
				$path = '<path d="M15,32.5c-0.4,0-0.8-0.2-1.1-0.5c-0.6-0.6-0.6-1.7,0-2.2l9.8-9.8l-9.8-9.8c-0.6-0.6-0.6-1.7,0-2.2c0.6-0.6,1.7-0.6,2.2,0 l10.9,10.9c0.6,0.6,0.6,1.7,0,2.2L16.2,32C15.9,32.3,15.4,32.5,15,32.5z" />';

				break;
			case 'arrowRightCircle':
				$path = '<path d="M20.6,28.2c-0.3,0-0.6-0.1-0.9-0.4c-0.5-0.5-0.5-1.3,0-1.8l4.8-4.9h-12c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2h12l-4.8-4.9 c-0.5-0.5-0.5-1.3,0-1.8c0.5-0.5,1.3-0.5,1.8,0l6.9,7c0.5,0.5,0.5,1.3,0,1.8l-6.9,7C21.2,28.1,20.9,28.2,20.6,28.2z" /><path d="M20,37.2c-9.5,0-17.2-7.7-17.2-17.2S10.5,2.8,20,2.8S37.2,10.5,37.2,20S29.5,37.2,20,37.2z M20,5.2 C11.9,5.2,5.2,11.9,5.2,20c0,8.1,6.6,14.8,14.8,14.8c8.1,0,14.8-6.6,14.8-14.8C34.8,11.9,28.1,5.2,20,5.2z" />';
				break;
			case 'caretRight':
				$path = '<path d="M27.2,18.7l-11-10.3c-1.1-0.9-2.9-0.2-2.9,1.3v20.6c0,1.5,1.8,2.3,2.9,1.3l11-10.3 C27.8,20.6,27.8,19.4,27.2,18.7z" />';
				break;
			default:
				break;
		}

		$svg = '';
		if ( $path ) {
			$svg_class = 'swl-svg-' . $icon_name;
			if ( $class ) {
				$svg_class .= ' ' . $class;
			}

			$svg = '<svg xmlns="http://www.w3.org/2000/svg" class="' . esc_attr( $svg_class ) . '" width="' . esc_attr( $size ) . '" height="' . esc_attr( $size ) . '" viewBox="' . $view_box . '" role="img" aria-hidden="true" focusable="false">' . $path . '</svg>';
		}

		return $svg;
		// return apply_filters( 'swell_get_svg', $svg, $icon_name, $attrs );
	}
}
