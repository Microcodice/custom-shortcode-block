import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('custom-shortcode-block/shortcode', {
  title: 'Custom Shortcode Block',
  icon: 'shortcode',
  category: 'widgets',
  attributes: {
    shortcode: {
      type: 'string',
      default: '',
    },
    backgroundColor: {
      type: 'string',
      default: '#ffffff',
    },
    paddingTop: {
      type: 'string',
      default: '10px',
    },
    paddingRight: {
      type: 'string',
      default: '10px',
    },
    paddingBottom: {
      type: 'string',
      default: '10px',
    },
    paddingLeft: {
      type: 'string',
      default: '10px',
    },
    marginTop: {
      type: 'string',
      default: '0px',
    },
    marginRight: {
      type: 'string',
      default: '0px',
    },
    marginBottom: {
      type: 'string',
      default: '0px',
    },
    marginLeft: {
      type: 'string',
      default: '0px',
    },
  },
  edit: Edit,
  save,
});