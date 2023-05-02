// import React from 'react';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
 
function Range({status}) {
 
  return (
    <div className="flex justify-center">
      <div style={{width: "300px", background: "#D9D9D9", height: "5px"}} className='flex items-center rounded-2xl justify-between'>
        <div style={{width:"25%",height: "5px", background: status > 1 ? "#1EE23D" : "#D9D9D9"}} className='flex items-center rounded-s-2x relative justify-start text'>
          <span style={{borderRadius:"50%", background: status > 0 ? "#1EE23D" : "#D9D9D9", boxShadow: status > 0 ? "0px 0px 10px #1EE23D" : null}} className='w-5 h-5 absolute -left-1 flex items-center justify-center text-white text-sm font-semibold'>1</span>
        </div>
        <div style={{width:"25%",height: "5px", background: status > 2 ? "#1EE23D" : "#D9D9D9"}} className='flex relative items-center text'>
          <span style={{borderRadius:"50%", background: status > 1 ? "#1EE23D" : "#D9D9D9", boxShadow: status > 1 ? "0px 0px 10px #1EE23D" : null}} className='w-5 h-5 absolute -left-1 flex items-center justify-center text-white text-sm font-semibold'>2</span>
        </div>
        <div style={{width:"25%",height: "5px", background: status > 3 ? "#1EE23D" : "#D9D9D9"}} className='flex relative items-center text'>
          <span style={{borderRadius:"50%", background: status > 2 ? "#1EE23D" : "#D9D9D9", boxShadow: status > 2 ? "0px 0px 10px #1EE23D" : null}} className='w-5 h-5 absolute -left-1 flex items-center justify-center text-white text-sm font-semibold'>3</span>
        </div>
        <div style={{width:"25%",height: "5px", background: status > 4 ? "#1EE23D" : "#D9D9D9"}} className='flex relative items-center text'>
          <span style={{borderRadius:"50%", background: status > 3 ? "#1EE23D" : "#D9D9D9", boxShadow: status > 3 ? "0px 0px 10px #1EE23D" : null}} className='w-5 h-5 absolute -left-1 flex items-center justify-center text-white text-sm font-semibold'>4</span>
        </div>
        <div style={{height: "5px", background: status > 5 ? "#1EE23D" : "#D9D9D9"}} className='flex relative rounded-2xl items-center text'>
          <span style={{borderRadius:"50%", background: status > 4 ? "#1EE23D" : "#D9D9D9", boxShadow: status > 4 ? "0px 0px 10px #1EE23D" : null}} className='w-5 h-5 absolute -left-1 flex items-center justify-center text-white text-sm font-semibold'>5</span>
        </div>
      </div>
    </div>
  );
}

export default Range;
Range.propTypes = {
  status: PropTypes.number.isRequired,
  };