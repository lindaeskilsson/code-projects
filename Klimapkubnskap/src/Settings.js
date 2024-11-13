import React from 'react';
import Toggle from 'react-styled-toggle';
import { GoUnmute } from 'react-icons/go';

// a reusable compontent with togglebuttons and icons so that the user easely
// can change to easy/short text to hard/lond text and darkmode.

const Settings = (props) => {
  // Call back function for changing the text mode of the article
  const handleChange = (event) => {
    props.callback(event.target.checked);
  };

  return (
    <div className="settings-con">
      <div className="settings-row">
        <Toggle
          onChange={handleChange}
          width={40}
          height={20}
          sliderWidth={12}
          sliderHeight={12}
          translate={19}
          labelRight=" Lätt text"
          backgroundColorChecked="#9097d4"
          backgroundColorUnchecked="#cdddff"
        />
      </div>
      <div className="settings-row">
        <Toggle
          width={40}
          height={20}
          sliderWidth={12}
          sliderHeight={12}
          translate={19}
          labelRight="    Dark Mode"
          backgroundColorChecked="#9097d4"
          backgroundColorUnchecked="#cdddff"
        />
      </div>
      <p>
        <GoUnmute /> Läshjälp
      </p>
    </div>
  );
};

export default Settings;
