// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/xcm-circle-colorful.svg';

/**![XcmCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi14Y20tY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjIwIDIyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjIwIDIyMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHBhdGggZD0iTTExMCwyMjBjNjAuOCwwLDExMC00OS4yLDExMC0xMTBDMjIwLDQ5LjIsMTcwLjgsMCwxMTAsMEM0OS4yLDAsMCw0OS4yLDAsMTEwQzAsMTcwLjgsNDkuMiwyMjAsMTEwLDIyMHoiIHN0eWxlPSJmaWxsOiAjMTMxMjE4OyIvPgo8cGF0aCBkPSJNMTA2LjEsOTYuN0w3MC4xLDYxYy0xLTEtMi44LTEuMS0zLjktMC4xYy0wLjksMC44LTEuOSwxLjgtMi43LDIuN2MtMSwxLjEtMSwyLjksMC4xLDMuOWwzNi4xLDM1LjgKCWMzLjcsMy42LDMuNyw5LjYsMCwxMy4ybC00Myw0Mi43Yy0wLjksMC45LTIuNCwwLjgtMy4zLTAuMmwtMC4xLTAuMWMtMi41LTMtMi4zLTcuNCwwLjUtMTAuMWwzNy4zLTM3YzEuMS0xLjEsMS4xLTIuOSwwLTMuOQoJTDU0LjgsNzIuMmMtMy41LTMuNS0zLjgtOS0wLjUtMTIuN2MyLjMtMi43LDUtNS4yLDcuNi03LjZjMy44LTMuMyw5LjMtMywxMi44LDAuNWwzNi4xLDM1LjhjMS4xLDEuMSwyLjksMS4xLDMuOSwwbDM3LTM3CgljMi43LTIuNyw3LTMsMTAtMC42bDAuMSwwLjFjMS4yLDEsMS4xLDIuNSwwLjYsMy4ybC00My4yLDQyLjlDMTE1LjcsMTAwLjQsMTA5LjgsMTAwLjQsMTA2LjEsOTYuN3oiIHN0eWxlPSJmaWxsOiAjNDBEOEM4OyIvPgo8cGF0aCBkPSJNNDIuMyw3OC4xbC0wLjgsMmMtMC44LDIuMS0wLjQsNC41LDEuMiw2LjJsMjMuMiwyM2MwLjQsMC40LDAuNCwwLjksMCwxLjNsLTIzLjIsMjNjLTEuNiwxLjYtMi4xLDQuMS0xLjIsNi4yCgljMC4zLDAuNywwLjYsMS4zLDAuOSwyYzAuOCwxLjgsMy4yLDIuMSw0LjUsMC44bDMwLjgtMzAuN2MxLjEtMS4xLDEuMS0yLjksMC0zLjlMNDYuOSw3Ny4yQzQ1LjQsNzUuOSw0My4xLDc2LjMsNDIuMyw3OC4xeiIgc3R5bGU9ImZpbGw6ICM0MEQ4Qzg7Ii8+CjxwYXRoIGQ9Ik0xNzEuOCw3MWMyLjctMi44LDIuOS03LjEsMC40LTEwLjJjLTAuOC0xLTIuNC0xLjEtMy4zLDBsLTQyLjgsNDIuN2MtMy43LDMuNi0zLjcsOS41LDAsMTMuMmwzNS45LDM1LjcKCWMxLjEsMS4xLDEuMSwyLjgsMC4xLDMuOWwtMi44LDIuOGMtMS4xLDEtMi45LDEtMy45LTAuMWwtMzUuOC0zNS44Yy0zLjctMy42LTkuNy0zLjYtMTMuMywwbC00Myw0Mi43Yy0wLjksMC45LTAuOCwyLjQsMC4yLDMuMwoJbDAuMSwwLjFjMi45LDIuNCw3LjMsMi4yLDEwLTAuNWwzNy40LTM3LjFjMS0xLjEsMi44LTEuMSwzLjksMGwzNS45LDM1LjhjMy40LDMuNCw5LjIsMy42LDEyLjgsMC42YzIuNi0yLjIsNS4yLTQuOCw3LjUtNy41CgljMy4zLTMuNywzLjEtOS4zLTAuNC0xMi44bC0zNS45LTM1LjljLTEuMS0xLTEuMS0yLjgsMC0zLjlMMTcxLjgsNzF6IiBzdHlsZT0iZmlsbDogIzQwRDhDODsiLz4KPC9zdmc+Cg==) */
export const XcmCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xcm-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

XcmCircleColorful.displayName = 'XcmCircleColorful';
