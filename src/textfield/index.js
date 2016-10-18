import { mdlUpgrade, reflectPropertiesToAttributes } from '../utils';

class MaterialTextfield extends HTMLElement {

  constructor() {
    super();
    this.classList.add('mdl-textfield',  'mdl-js-textfield');
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.classList.toggle('mdl-textfield--floating-label', this.floatingLabel);
    this.classList.toggle('mdl-textfield--expandable', this.expandable);
    <this style="color: red;">
      I am a text.
      {this.expandable}
      <p style="font-size: inherite;">
      ooohh
      </p>
    </this>
  }

}

export default reflectPropertiesToAttributes(mdlUpgrade(MaterialTextfield),
  [
    { propName: 'disabled' },
    { propName: 'error', propType: String },
    { propName: 'expandable' },
    { propName: 'expandableIcon', propType: String },
    { propName: 'floatingLabel' },
    { propName: 'inputClassName', propType: String },
    { propName: 'label', propType: String },
    { propName: 'maxRows', propType: Number },
    { propName: 'pattern', propType: String },
    { propName: 'required' },
    { propName: 'rows', propType: Number },
    { propName: 'value', propType: String }
  ]
)
