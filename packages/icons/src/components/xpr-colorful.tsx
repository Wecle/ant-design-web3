// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/xpr-colorful.svg';

/**![XprColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi14cHItY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNjkuMiAzMDIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2OS4yIDMwMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8bGluZWFyR3JhZGllbnQgaWQ9ImFudC13ZWIzLWljb24teHByLWNvbG9yZnVsLVNWR0lEXzFfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI0LjEzMjQiIHkxPSIxNDYuMTU1MiIgeDI9IjI2MS4wMzAyIiB5Mj0iMTU2LjU0MjciPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNkI1N0E1Ii8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1OTQ5OUUiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggZD0iTTc2LjUsMTAzLjdjLTAuNSw0LjItMSw4LjYtMS4zLDEzbDAsMGMtNy42LDUuMy0xNC43LDEwLjctMjEuMywxNi4xbDAsMGMtMy40LDIuOC02LjcsNS42LTkuOCw4LjVsMCwwCglDMTkuNywxMTYuNCw5LjMsOTQsMTYsODIuNWwwLDBjNS45LTEwLjIsMjUuNy0xMy4xLDUzLjUtNy42bDAsMGMxLjEtNC44LDIuMi05LjQsMy41LTEzLjhsMCwwYy0zMy43LTYuOC01OS40LTIuMy02OS4xLDE0LjRsMCwwCglDMS4zLDc5LjksMCw4NC45LDAsOTAuMmwwLDB2MC41YzAuMiwyMy43LDIzLjUsNTUuNCw2Mi40LDg1LjNsMCwwYzQsMy4xLDguMyw2LjIsMTIuNyw5LjNsMCwwYzAuOCw5LjcsMiwxOSwzLjUsMjcuN2wwLDAKCWMwLjcsMy45LDEuNCw3LjcsMi4yLDExLjRsMCwwYy0zMy43LDguNy01OC4yLDYuNS02NC45LTVsMCwwYy01LjktMTAuMiwxLjUtMjguOSwyMC4xLTUwLjJsMCwwTDI2LjMsMTU5CgljLTIzLDI2LTMyLjIsNTAuNy0yMi41LDY3LjVsMCwwYzYuOCwxMS44LDIxLjUsMTcuNCw0MS4zLDE3LjRsMCwwYzE5LjksMCw0NC45LTUuNyw3Mi4zLTE2LjhsMCwwYzAuNy0wLjMsMS40LTAuNiwyLjItMC45bDAsMAoJYzQuOC0yLDkuNi00LjEsMTQuNS02LjRsMCwwYzAuMi0wLjEsMC40LTAuMiwwLjYtMC4zbDAsMGM4LjcsNCwxNy4zLDcuNiwyNS44LDEwLjdsMCwwYzMuNywxLjQsNy40LDIuNiwxMSwzLjhsMCwwCgljLTkuMywzMy42LTIzLjUsNTMuOC0zNi44LDUzLjhsMCwwYy0xMS44LDAtMjQuMy0xNS44LTMzLjQtNDIuOGwwLDBjLTQuNiwxLjYtOS4xLDMtMTMuNiw0LjJsMCwwYzExLDMyLjYsMjcuNyw1Mi42LDQ3LDUyLjYKCWMyOC4xLDAsNTAuNS00Mi4yLDU4LjItMTAzLjdsMCwwYzAuNS00LjIsMC45LTguNiwxLjMtMTIuOWwwLDBjNy45LTUuNSwxNS4zLTExLjIsMjIuMi0xN2wwLDBjMC40LTAuMywwLjgtMC42LDEuMi0xbDAsMAoJYzIuNi0yLjIsNS4xLTQuNCw3LjYtNi43bDAsMGMyNC41LDI0LjgsMzQuOSw0Ny4zLDI4LjIsNTguOGwwLDBjLTUuNSw5LjUtMjMuNiwxMi43LTQ4LjQsOC42bDAsMGMtMS43LTAuMy0zLjMtMC42LTUtMC45bDAsMAoJYy0xLjEsNC43LTIuMiw5LjItMy41LDEzLjZsMCwwYzIuMSwwLjQsNC4yLDAuOCw2LjIsMS4xbDAsMGM3LjksMS4zLDE1LjIsMiwyMS45LDJsMCwwYzIwLjEsMCwzNC40LTUuOSw0MS0xNy4zbDAsMAoJYzguOC0xNS4yLDIuNC0zNy4zLTE4LjEtNjIuMWwwLDBjLTEwLjYtMTIuOS0yNC40LTI1LjktNDAuNC0zOC4zbDAsMGMtNC4xLTMuMi04LjQtNi4zLTEyLjctOS40bDAsMGMtMC44LTkuNy0yLTE5LTMuNi0yNy44bDAsMAoJYy0wLjctMy45LTEuNC03LjctMi4yLTExLjRsMCwwYzUuNy0xLjUsMTEuMi0yLjcsMTYuNS0zLjZsMCwwYzI0LjgtNC4xLDQyLjktMC45LDQ4LjQsOC42bDAsMGM1LjgsMTAtMS4zLDI4LjMtMTkuMyw0OS4ybDAsMAoJYzMuNSwzLjQsNi43LDYuOCw5LjcsMTAuMWwwLDBjMS4zLTEuNCwyLjUtMi45LDMuNi00LjNsMCwwYzIwLjQtMjQuOCwyNi45LTQ2LjksMTguMS02Mi4xbDAsMGMtOC44LTE1LjItMzEuMS0yMC43LTYyLjgtMTUuNGwwLDAKCWMtMTQuNywyLjQtMzAuOCw3LjEtNDcuNSwxMy41bDAsMGMtMC43LDAuMy0xLjMsMC41LTIsMC44bDAsMGMtNS42LDIuMi0xMS4yLDQuNi0xNi44LDcuMmwwLDBjLTAuNSwwLjItMSwwLjUtMS41LDAuN2wwLDAKCWMtOC44LTQuMS0xNy41LTcuOC0yNS45LTEwLjlsMCwwYy0zLjctMS40LTcuNC0yLjYtMTEtMy44bDAsMGM5LjMtMzMuNSwyMy41LTUzLjcsMzYuOC01My43bDAsMGMxMS44LDAsMjQuNCwxNS45LDMzLjUsNDIuOWwwLDAKCWM0LjYtMS41LDkuMS0yLjksMTMuNi00LjJsMCwwQzE3MC43LDIwLjEsMTU0LDAsMTM0LjYsMGwwLDBDMTA2LjYsMCw4NC4xLDQyLjIsNzYuNSwxMDMuN0w3Ni41LDEwMy43eiBNMTY1LjksOTguNgoJYy0wLjItMC4yLTAuNS0wLjMtMC43LTAuNGwwLDBjLTQuNy0yLjctOS41LTUuMy0xNC4xLTcuOGwwLDBjMC40LTAuMiwwLjgtMC40LDEuMi0wLjVsMCwwYzUuNy0yLjQsMTEuNC00LjYsMTYuOS02LjVsMCwwCgljMS45LTAuNywzLjgtMS4zLDUuNi0xLjlsMCwwYzAuOCwzLjcsMS41LDcuNCwyLjIsMTEuM2wwLDBjMC44LDQuNSwxLjQsOS4xLDIsMTMuOGwwLDBDMTc0LjcsMTAzLjksMTcwLjMsMTAxLjIsMTY1LjksOTguNgoJTDE2NS45LDk4LjZ6IE05Mi4yLDkzLjNjMC43LTQuMSwxLjQtOCwyLjMtMTEuOGwwLDBjMy43LDEuMiw3LjQsMi40LDExLjIsMy45bDAsMGM0LjEsMS41LDguMywzLjIsMTIuNiw1bDAsMAoJYy00LjcsMi41LTkuNSw1LjEtMTQuMiw3LjhsMCwwYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuNGwwLDBjLTQuNSwyLjYtOC45LDUuMy0xMy4yLDhsMCwwQzkwLjksMTAyLDkxLjUsOTcuNiw5Mi4yLDkzLjNMOTIuMiw5My4zegoJIE0xMTEuMSwxOTEuN2MtMy40LTEuOS02LjctMy45LTkuOS01LjlsMCwwYy00LjQtMi43LTguNi01LjQtMTIuNy04LjJsMCwwYy0wLjYtOC41LTAuOS0xNy40LTAuOS0yNi42bDAsMGMwLTQuOCwwLjEtOS41LDAuMy0xNC4xCglsMCwwYzAuMi00LjMsMC40LTguNCwwLjctMTIuNWwwLDBjNy4xLTQuOCwxNC42LTkuNSwyMi41LTE0LjFsMCwwYzMtMS44LDYuMS0zLjUsOS4xLTUuMWwwLDBjNC44LTIuNiw5LjYtNSwxNC40LTcuNGwwLDAKCWM3LjcsMy43LDE1LjUsNy45LDIzLjUsMTIuNWwwLDBjMy40LDIsNi43LDMuOSw5LjksNS45bDAsMGM0LjQsMi43LDguNiw1LjQsMTIuNyw4LjJsMCwwYzAuNiw4LjUsMC45LDE3LjQsMC45LDI2LjZsMCwwCgljMCw0LjgtMC4xLDkuNS0wLjMsMTQuMWwwLDBjLTAuMiw0LjItMC40LDguNC0wLjcsMTIuNWwwLDBjLTcuMSw0LjgtMTQuNiw5LjUtMjIuNSwxNC4xbDAsMGMtMi4xLDEuMi00LjEsMi40LTYuMiwzLjVsMCwwCgljLTUuMywzLTEwLjYsNS43LTE1LjgsOC4zbDAsMGMtMC41LDAuMi0xLDAuNS0xLjUsMC43bDAsMEMxMjYuOCwyMDAuNCwxMTguOSwxOTYuMiwxMTEuMSwxOTEuN0wxMTEuMSwxOTEuN3ogTTYxLjcsMTU3LjQKCWMtMi42LTIuMS01LTQuMy03LjQtNi40bDAsMGMzLjMtMi45LDYuNy01LjksMTAuMy04LjhsMCwwYzMtMi40LDYuMS00LjksOS40LTcuM2wwLDBjLTAuMiw0LTAuMyw4LjEtMC4zLDEyLjJsMCwwCgljMCwxLjMsMCwyLjYsMCwzLjlsMCwwYzAsNS41LDAuMSwxMC44LDAuMywxNi4xbDAsMEM2OS43LDE2My45LDY1LjUsMTYwLjcsNjEuNywxNTcuNEw2MS43LDE1Ny40eiBNMTk1LjYsMTU1YzAtMS4zLDAtMi42LDAtNGwwLDAKCWMwLTUuNS0wLjEtMTAuOC0wLjMtMTYuMWwwLDBjNC4zLDMuMiw4LjQsNi41LDEyLjMsOS43bDAsMGMyLjUsMi4xLDUsNC4zLDcuMyw2LjRsMCwwYy0yLjYsMi4zLTUuMyw0LjctOC4xLDdsMCwwCgljLTAuNCwwLjMtMC44LDAuNy0xLjIsMWwwLDBjLTMuMywyLjctNi44LDUuNS0xMC40LDguMmwwLDBDMTk1LjQsMTYzLjIsMTk1LjYsMTU5LjEsMTk1LjYsMTU1TDE5NS42LDE1NXogTTkyLjMsMjA5LjIKCWMtMC44LTQuNS0xLjQtOS4xLTItMTMuOGwwLDBjNC4zLDIuNyw4LjYsNS4zLDEzLjEsNy45bDAsMGMwLjIsMC4yLDAuNSwwLjMsMC43LDAuNGwwLDBjNC43LDIuNyw5LjQsNS4zLDE0LjIsNy44bDAsMAoJYzAsMC0wLjEsMC0wLjEsMC4xbDAsMGMtNSwyLjEtOS45LDQtMTQuNyw1LjhsMCwwYy0wLjcsMC4zLTEuNCwwLjUtMi4xLDAuOGwwLDBjLTIuMywwLjgtNC42LDEuNi02LjksMi4zbDAsMAoJQzkzLjcsMjE2LjksOTMsMjEzLjEsOTIuMywyMDkuMkw5Mi4zLDIwOS4yeiBNMTYzLjYsMjE2LjZjLTQuMi0xLjYtOC40LTMuMi0xMi43LTVsMCwwYzAuNi0wLjMsMS4yLTAuNiwxLjgtMC45bDAsMAoJYzQuMS0yLjIsOC4yLTQuNSwxMi40LTYuOGwwLDBjMS4yLTAuNywyLjQtMS40LDMuNS0yLjFsMCwwYzMuNS0yLjEsNi45LTQuMiwxMC4zLTYuM2wwLDBjLTAuNiw0LjUtMS4yLDktMS45LDEzLjJsMCwwCgljLTAuNyw0LjEtMS41LDgtMi4zLDExLjlsMCwwQzE3MS4xLDIxOS4zLDE2Ny40LDIxOCwxNjMuNiwyMTYuNkwxNjMuNiwyMTYuNnogTTExNi42LDE1MUwxMTYuNiwxNTFjMC05LjksOC4xLTE4LDE4LTE4bDAsMAoJYzkuOSwwLDE4LDguMSwxOCwxOGwwLDBjMCw5LjktOC4xLDE4LTE4LDE4bDAsMEMxMjQuNywxNjksMTE2LjYsMTYwLjksMTE2LjYsMTUxeiIgc3R5bGU9ImZpbGwtcnVsZTogZXZlbm9kZDsgY2xpcC1ydWxlOiBldmVub2RkOyIgZmlsbD0idXJsKCNhbnQtd2ViMy1pY29uLXhwci1jb2xvcmZ1bC1TVkdJRF8xXykiLz4KPC9zdmc+Cg==) */
export const XprColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-xpr-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

XprColorful.displayName = 'XprColorful';
