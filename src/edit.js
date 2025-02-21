import { __ } from '@wordpress/i18n';
import { TextareaControl, PanelBody, RangeControl, ColorPicker } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
  const {
    shortcode,
    backgroundColor,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = attributes;

  const padding = `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
  const margin = `${marginTop} ${marginRight} ${marginBottom} ${marginLeft}`;

  return (
    <div style={{ backgroundColor, padding, margin }}>
      <InspectorControls>
        <PanelBody title={__('Settings')} initialOpen={true}>
          <TextareaControl
            label={__('Shortcode')}
            value={shortcode}
            onChange={(value) => setAttributes({ shortcode: value })}
          />
          <ColorPicker
            color={backgroundColor}
            onChangeComplete={(value) => setAttributes({ backgroundColor: value.hex })}
          />

          <h3>{__('Padding')}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <RangeControl
              label={__('Top')}
              value={parseInt(paddingTop)}
              onChange={(value) => setAttributes({ paddingTop: `${value}px` })}
              min={0}
              max={50}
            />
            <RangeControl
              label={__('Right')}
              value={parseInt(paddingRight)}
              onChange={(value) => setAttributes({ paddingRight: `${value}px` })}
              min={0}
              max={50}
            />
            <RangeControl
              label={__('Bottom')}
              value={parseInt(paddingBottom)}
              onChange={(value) => setAttributes({ paddingBottom: `${value}px` })}
              min={0}
              max={50}
            />
            <RangeControl
              label={__('Left')}
              value={parseInt(paddingLeft)}
              onChange={(value) => setAttributes({ paddingLeft: `${value}px` })}
              min={0}
              max={50}
            />
          </div>

          <h3>{__('Margin')}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <RangeControl
              label={__('Top')}
              value={parseInt(marginTop)}
              onChange={(value) => setAttributes({ marginTop: `${value}px` })}
              min={0}
              max={50}
            />
            <RangeControl
              label={__('Right')}
              value={parseInt(marginRight)}
              onChange={(value) => setAttributes({ marginRight: `${value}px` })}
              min={0}
              max={50}
            />
            <RangeControl
              label={__('Bottom')}
              value={parseInt(marginBottom)}
              onChange={(value) => setAttributes({ marginBottom: `${value}px` })}
              min={0}
              max={50}
            />
            <RangeControl
              label={__('Left')}
              value={parseInt(marginLeft)}
              onChange={(value) => setAttributes({ marginLeft: `${value}px` })}
              min={0}
              max={50}
            />
          </div>
        </PanelBody>
      </InspectorControls>
      <div dangerouslySetInnerHTML={{ __html: shortcode }} />
    </div>
  );
}