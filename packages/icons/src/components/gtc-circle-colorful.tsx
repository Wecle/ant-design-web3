// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/gtc-circle-colorful.svg';

/**![GtcCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1ndGMtY2lyY2xlLWNvbG9yZnVsLUxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzIuNCAzMi40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMi40IDMyLjQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxjaXJjbGUgY3g9IjE2LjIiIGN5PSIxNi4yIiByPSIxNS4yIiBzdHlsZT0iZmlsbDogbm9uZTsgc3Ryb2tlOiAjMEUwMzMzOyBzdHJva2Utd2lkdGg6IDI7Ii8+CjxwYXRoIGQ9Ik0xOS45LDEzLjljMC42LDAuOCwwLjksMS45LDAuOSwyLjljMCwxLTAuMywyLTAuOSwyLjhsMS4yLDAuOWMwLjgtMS4xLDEuMi0yLjQsMS4yLTMuOGMwLTEuNC0wLjUtMi44LTEuMy00CglsLTAuNywwLjZMMTkuOSwxMy45eiIgc3R5bGU9ImZpbGwtcnVsZTogZXZlbm9kZDsgY2xpcC1ydWxlOiBldmVub2RkOyBmaWxsOiAjMDJFMkFDOyIvPgo8cGF0aCBkPSJNMjIuMiwyMS40bC00LjItMy4yYzAuMy0wLjQsMC41LTAuOSwwLjUtMS40YzAtMC41LTAuMS0xLTAuNC0xLjRsMi0xLjhsMi4xLTJjMC4xLTAuMSwwLjEtMC40LDAtMC41TDIyLDEwLjkKCWMtMS41LTEuNS0zLjUtMi40LTUuNi0yLjVsMC0xLjJjMC0wLjEsMC0wLjIsMC0wLjJjMC0wLjEtMC4xLTAuMS0wLjEtMC4ycy0wLjEtMC4xLTAuMi0wLjFjLTAuMSwwLTAuMS0wLjEtMC4yLTAuMQoJYy0wLjEsMC0wLjIsMC0wLjIsMC4xYy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFDMTUuNCw2LjksMTUuNCw3LDE1LjMsN2MwLDAuMSwwLDAuMiwwLDAuMmwwLDEuMmMtMC41LDAuMS0xLDAuMS0xLjUsMC4zbDAtMS41CgljMC0wLjEsMC0wLjIsMC0wLjJjMC0wLjEtMC4xLTAuMS0wLjEtMC4yYy0wLjEtMC4xLTAuMS0wLjEtMC4yLTAuMWMtMC4xLDAtMC4xLTAuMS0wLjItMC4xYy0wLjEsMC0wLjIsMC0wLjIsMC4xCgljLTAuMSwwLTAuMSwwLjEtMC4yLDAuMUMxMi44LDYuOSwxMi44LDcsMTIuOCw3YzAsMC4xLDAsMC4yLDAsMC4ybDAsMS45Yy0xLjcsMC44LTMuMSwyLjEtNCwzLjhjLTAuOSwxLjctMS4xLDMuNi0wLjgsNS41CgljMC40LDEuOSwxLjQsMy41LDIuOCw0LjdjMS40LDEuMiwzLjMsMS45LDUuMiwxLjlsNi4xLDBjMC4yLDAsMC4zLTAuMiwwLjMtMC4zdi0zLjFDMjIuNCwyMS42LDIyLjMsMjEuNSwyMi4yLDIxLjR6IE0xNi4xLDIzLjYKCWMtMS41LDAtMy0wLjUtNC4xLTEuNGMtMS4yLTAuOS0yLTIuMi0yLjQtMy43Yy0wLjQtMS41LTAuMy0zLDAuMy00LjRjMC42LTEuNCwxLjYtMi41LDIuOS0zLjNsMCwyLjJjMCwwLjEsMCwwLjIsMCwwLjIKCWMwLDAuMSwwLjEsMC4xLDAuMSwwLjJjMC4xLDAuMSwwLjEsMC4xLDAuMiwwLjFjMC4xLDAsMC4xLDAuMSwwLjIsMC4xYzAuMSwwLDAuMiwwLDAuMi0wLjFjMC4xLDAsMC4xLTAuMSwwLjItMC4xCgljMC4xLTAuMSwwLjEtMC4xLDAuMS0wLjJjMC0wLjEsMC0wLjIsMC0wLjJsMC0yLjhjMC44LTAuMywxLjUtMC40LDIuMy0wLjRjMS41LDAsMi45LDAuNSw0LjEsMS40YzAuMSwwLjEsMC4xLDAuMiwwLDAuM0wxNywxNC41CgljLTAuMy0wLjEtMC42LTAuMi0wLjktMC4yYy0wLjMsMC0wLjcsMC4xLTEsMC4yYy0wLjMsMC4xLTAuNiwwLjQtMC44LDAuNmMtMC4yLDAuMy0wLjQsMC42LTAuNSwwLjljLTAuMSwwLjMtMC4xLDAuNy0wLjEsMQoJYzAuMSwwLjQsMC4yLDAuNywwLjQsMWMwLjIsMC4zLDAuNCwwLjUsMC43LDAuN2MwLjMsMC4yLDAuNiwwLjMsMSwwLjRjMC4zLDAuMSwwLjcsMCwxLTAuMWw0LjEsMy4xYzAsMCwwLjEsMC4xLDAuMSwwLjFsMCwxLjEKCWMwLDAuMS0wLjEsMC4yLTAuMiwwLjJMMTYuMSwyMy42eiBNMTcuMSwxNi44YzAsMC4yLTAuMSwwLjQtMC4yLDAuNWMtMC4xLDAuMi0wLjMsMC4zLTAuNCwwLjRjLTAuMiwwLjEtMC40LDAuMS0wLjYsMC4xCgljLTAuMiwwLTAuNC0wLjEtMC41LTAuM2MtMC4xLTAuMS0wLjItMC4zLTAuMy0wLjVjMC0wLjIsMC0wLjQsMC4xLTAuNmMwLjEtMC4yLDAuMi0wLjMsMC40LTAuNGMwLjItMC4xLDAuMy0wLjIsMC41LTAuMgoJYzAuMywwLDAuNSwwLjEsMC43LDAuM0MxNywxNi4yLDE3LjEsMTYuNSwxNy4xLDE2Ljh6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7IGZpbGw6ICMwMkUyQUM7Ii8+Cjwvc3ZnPgo=) */
export const GtcCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-gtc-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

GtcCircleColorful.displayName = 'GtcCircleColorful';
