import { default as MaterialButton } from './material-button';
import { reflectPropertiesToAttributes } from '../utils';

class MaterialIconButton extends MaterialButton {

  constructor() {
    super();
    this.classList.add('mdl-button--icon');
    if (this.name) {
      this.innerHTML = `<mdl-icon>${this.name}</mdl-icon>`;
    }
  }

}

export default reflectPropertiesToAttributes(MaterialIconButton, [
  { propName: 'name', propType: String },
])