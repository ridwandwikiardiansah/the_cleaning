import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import style from '../css/Picker.component.css';

export default function Picker() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <TimePicker
       onChange={onChange}
       value={value}
       format={'HH : mm '}
       clockIcon={null}/>
    </div>
  );
}