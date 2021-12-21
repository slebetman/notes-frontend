import { CompactPicker } from 'react-color';
import Popup from "reactjs-popup";

function ColorPicker (props) {
	return <Popup trigger={<button id="color">Color</button>} position="bottom right">
		<CompactPicker
			color={props.value}
			onChangeComplete={c => props.onChange(c.hex)}
			colors={[
				'#FFFFFF', '#FFFF66', '#FFCC66', '#FF6666', '#FF66FF', '#CC66FF',
				'#66CCFF', '#99FFFF', '#66FFCC', '#66FF66', '#6666FF', '#6666CC',
				
				'#CCCCCC', '#FFFF00', '#FFAA00', '#FF3333', '#FF00FF', '#AA00FF',
				'#00AAFF', '#33FFFF', '#00FFAA', '#00FF33', '#3333FF', '#3333AA',
			]}
		/>
	</Popup>
}

export default ColorPicker;
