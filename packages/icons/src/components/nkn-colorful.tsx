// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/nkn-colorful.svg';

/**![NknColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1ua24tY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1My4xIDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1My4xIDU2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxsaW5lYXJHcmFkaWVudCBpZD0iYW50LXdlYjMtaWNvbi1ua24tY29sb3JmdWwtU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCIgeTE9IjI3Ljg4OTgiIHgyPSI1My4wNzUiIHkyPSIyNy44ODk4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTUuODg5OCkiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMTMzNTU3Ii8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwRjFDMkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNhbnQtd2ViMy1pY29uLW5rbi1jb2xvcmZ1bC1TVkdJRF8xXyk7IiBkPSJNNDgsMjVjLTAuMiwxLjUtMS4xLDcuNi02LDExYy00LjEsMi45LTkuNSwzLTEyLDNjLTAuNCwwLTAuOCwwLTEsMGgtMXYtMQoJYzAuMS0xLjUsMC41LTYuMSw0LTEwYzUuNy02LjMsMTQuMy01LjEsMTUtNWgxVjI1eiBNMzUsMjFjMC40LTAuNCwwLjgtMC44LDEtMWwtMS0xYy0wLjItMC4yLTAuNi0wLjYtMS0xYy0xLjctMS42LTUuNC01LTExLTYKCWMtMS4zLTAuMi0zLjQtMC42LTYsMGMtMi45LDAuNy01LDIuMS02LDNsLTEsMWwtMSwxbDEsMWwxLDFjMS4xLDEsMy44LDMuNiw4LDVjMS44LDAuNiw0LjUsMS42LDgsMUMzMS4zLDI0LjMsMzQuMiwyMS43LDM1LDIxegoJIE0xOCwyN2MtMS43LTAuNy00LjYtMS42LTgtMWMtNC41LDAuOC03LjYsMy43LTksNWMtMC40LDAuNC0wLjgsMC43LTEsMWwxLDFjNCwyLjYsNywyLjIsOCwyYzMuNC0wLjYsNi4zLTMuNCw5LTZsMS0xTDE4LDI3egoJIE0zNywxOGMwLjQsMC40LDAuOCwwLjgsMSwxYzAuMi0wLjIsMC42LTAuNSwxLTFjMi42LTMuMSwyLjEtNy4yLDItOGMtMC4zLTIuNC0xLjQtNC4xLTItNWMtMS40LTIuMS0zLTMuMy00LTRsLTItMQoJYy0wLjMsMC4yLTAuNiwwLjUtMSwxYy0yLjQsMi45LTIsNi44LTIsN0MzMC40LDExLjIsMzIuNiwxMy41LDM3LDE4eiBNMjgsMTFjMC0wLjIsMC0wLjYsMC0xYzAsMC0wLjEtMi4yLTEtNGMtMS0xLjktNC4xLTMuNy04LTQKCWMtMC4zLDAtMC43LDAtMSwwdjFjMCwwLjQsMC40LDQuOSw0LDdjMS41LDAuOSwzLDEsNCwxSDI4eiBNOSwzOGMtMC45LDAuMi0yLjUsMC43LTQsMmMtMi41LDIuMi0yLjksNS4zLTMsNmMtMC4xLDAuOC0wLjEsMS41LDAsMgoJaDJjMC43LTAuMSw0LjYtMSw2LTRjMC45LTEuOCwxLTQuNywxLTVjMC0wLjQsMC0wLjgsMC0xSDl6IE0yMCwzMGMwLDAtNS4yLDMuOS03LDhjLTEuNiwzLjctMS4zLDcuMS0xLDljMC4xLDAuNywwLjksNC42LDQsOGwxLDFoMQoJbDEtMWMxLjMtMS4xLDMuNi0zLjQsNS03YzAuMy0wLjgsMS45LTQuOSwxLTEwYy0wLjMtMS43LTAuOC00LjUtMy03Yy0wLjQtMC40LTAuNy0wLjgtMS0xSDIweiBNMjcsNDNjMC4yLDAuNSwwLjUsMS4yLDEsMgoJYzAuNywxLjIsMy42LDYsOSw3YzMsMC41LDUuNS0wLjMsNy0xYzAtMC4yLDAtMC42LDAtMXMtMC4yLTItMi00Yy0yLjUtMi44LTUuNy0zLjktNi00Yy0zLjYtMS4yLTYuOC0wLjQtOCwwTDI3LDQzeiBNNDEsNDEKCWMxLDAuOCwyLjgsMS44LDUsMmMyLjgsMC4yLDYuNS0wLjksNy0zYzAuMS0wLjQsMC4xLTAuOCwwLTFjLTAuNC0wLjQtMi43LTMuMS02LTNjLTIuNywwLjEtNC45LDItNiwzYy0wLjQsMC40LTAuOCwwLjctMSwxTDQxLDQxeiIvPgo8L3N2Zz4K) */
export const NknColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-nkn-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

NknColorful.displayName = 'NknColorful';
