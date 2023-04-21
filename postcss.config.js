import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';
import postcssNested from 'postcss-nested';

export default {
	plugins: [postcssNested(),postcssPresetEnv(), cssnano()]
};
