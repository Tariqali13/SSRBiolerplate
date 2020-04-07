import React from "react";
import ReactTooltip from "react-tooltip";


  /**
   * @return {any} `ToolTipExpand` assign alway false otherwise tooltip not working `place` add place where tooltip
   * show `top,bottom,left,right` offsetValue `offsetValue` is a property for padding you are giving in `px` offsetDirection
   * which side you want padding `top,bottom,left,right` 
   */

const Tooltip = ({
  id,
  ToolTipExpand /** assign alway false otherwise tooltip not working**/,
  place,
  offsetValue,
  offsetDirection
}) => (
  <>
    {ToolTipExpand == false && (
      <ReactTooltip
        id={id}
        place={place}
        offset={{ [offsetDirection]: offsetValue }}
        delayShow={500}
        effect="solid"
      />
    )}
  </>
);

export default Tooltip;
