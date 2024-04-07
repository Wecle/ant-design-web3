// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/usdd-circle-colorful.svg';

/**![UsddCircleColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi11c2RkLWNpcmNsZS1jb2xvcmZ1bC1MYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQyIDQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MiA0MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoKPHBhdGggZD0iTTIxLDBMMjEsMGMxMS42LDAsMjEsOS40LDIxLDIxbDAsMGMwLDExLjYtOS40LDIxLTIxLDIxbDAsMEM5LjQsNDIsMCwzMi42LDAsMjFsMCwwQzAsOS40LDkuNCwwLDIxLDB6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPGNpcmNsZSBjeD0iMjEiIGN5PSIyMSIgcj0iMTkuNiIgc3R5bGU9ImZpbGw6ICMyMTZDNTg7IHN0cm9rZTogIzIxNkM1ODsgc3Ryb2tlLXdpZHRoOiAwLjc7Ii8+CjxwYXRoIGQ9Ik0zOS4yLDIxYzAsMTAuMS04LjEsMTguMi0xOC4yLDE4LjJDMTAuOSwzOS4yLDIuOCwzMS4xLDIuOCwyMVMxMC45LDIuOCwyMSwyLjhDMzEuMSwyLjgsMzkuMiwxMC45LDM5LjIsMjF6IiBzdHlsZT0iZmlsbDogIzIxNkM1ODsiLz4KPHJlY3QgeD0iMTguNSIgeT0iMjkuOCIgd2lkdGg9IjIuMSIgaGVpZ2h0PSIyLjEiIHN0eWxlPSJmaWxsOiAjMjE2QzU4OyIvPgo8cmVjdCB4PSIyMiIgeT0iMjkuOCIgd2lkdGg9IjIuMSIgaGVpZ2h0PSIyLjEiIHN0eWxlPSJmaWxsOiAjMjE2QzU4OyIvPgo8cGF0aCBkPSJNMTUsOGgxMy4zQzI4LjcsOCwyOSw4LjQsMjksOC43djAuNGMwLDAuNC0wLjMsMC43LTAuNywwLjdIMTVjLTAuNCwwLTAuNy0wLjMtMC43LTAuN1Y4LjcKCUMxNC4zLDguNCwxNC43LDgsMTUsOHoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNMjEsMTAuNXYyMy44YzAsMC40LTAuMywwLjctMC43LDAuN2gtMC40Yy0wLjQsMC0wLjctMC4zLTAuNy0wLjdWMTAuNUgyMXoiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cGF0aCBkPSJNMjMuOCwxMC41djIzLjhjMCwwLjQtMC4zLDAuNy0wLjcsMC43aC0wLjRjLTAuNCwwLTAuNy0wLjMtMC43LTAuN1YxMC41SDIzLjh6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPHBhdGggZD0iTTE5LjUsMTYuNEwxOS41LDE2LjRMMTkuNSwxNi40YzAuNS0wLjIsMS4xLTAuMywxLjktMC4zYzEuMSwwLDEuOSwwLjIsMi41LDAuNmMwLjQsMC4zLDAuNywwLjYsMC45LDEuMQoJYzAuMiwwLjQsMC41LDAuOCwxLjEsMC44aDMuMmMwLjYsMCwxLjEtMC41LDEtMS4xYy0wLjEtMS0wLjUtMS44LTEuMS0yLjZjLTAuNy0xLTEuOC0xLjctMy4xLTIuMmMtMS4zLTAuNS0yLjgtMC44LTQuNS0wLjgKCWMtMS43LDAtMy4yLDAuMy00LjUsMC44Yy0xLjMsMC41LTIuNCwxLjMtMy4yLDIuMmwwLDBsMCwwYy0wLjgsMS0xLjIsMi4xLTEuMiwzLjRjMCwxLjYsMC42LDIuOSwxLjgsMy44YzEuMiwwLjksMi43LDEuNiw0LjYsMgoJYzAsMCwwLDAsMCwwbDIuNSwwLjVsMCwwbDAsMGMwLjgsMC4yLDEuNSwwLjQsMiwwLjZsMCwwYzAuNSwwLjIsMC45LDAuNCwxLjIsMC43bDAsMGwwLDBjMC4yLDAuMiwwLjQsMC41LDAuNCwwLjkKCWMwLDAuNC0wLjEsMC43LTAuNCwxLjFjLTAuMywwLjMtMC43LDAuNi0xLjMsMC44bDAsMGMtMC41LDAuMi0xLjIsMC4zLTIsMC4zYy0wLjgsMC0xLjUtMC4xLTIuMS0wLjNjLTAuNi0wLjItMS4xLTAuNS0xLjQtMC45CgljLTAuMi0wLjMtMC40LTAuNi0wLjUtMC45Yy0wLjEtMC41LTAuNS0wLjktMS4xLTAuOUgxM2MtMC42LDAtMS4xLDAuNS0xLDEuMWMwLjEsMS4yLDAuNSwyLjIsMS4yLDMuMWwwLDBjMC44LDEsMS45LDEuOCwzLjMsMi4zCglsMCwwYzEuNCwwLjUsMywwLjgsNC45LDAuOGMxLjksMCwzLjUtMC4yLDQuOC0wLjhsMCwwYzEuNC0wLjUsMi40LTEuMiwzLjEtMi4yYzAuNy0xLDEuMS0yLjEsMS4xLTMuNGwwLDB2MGMwLTAuOS0wLjItMS43LTAuNi0yLjQKCWMtMC40LTAuNy0wLjktMS4zLTEuNS0xLjhjLTAuNi0wLjUtMS40LTAuOS0yLjItMS4zYy0wLjgtMC4zLTEuOC0wLjYtMi44LTAuOGwtMi0wLjRsMCwwbDAsMGMtMC41LTAuMS0wLjktMC4yLTEuMy0wLjMKCWMtMC40LTAuMS0wLjgtMC4zLTEuMS0wLjVjLTAuMy0wLjItMC41LTAuNC0wLjctMC42Yy0wLjEtMC4yLTAuMi0wLjQtMC4yLTAuN2wwLDB2MGMwLTAuMywwLjEtMC43LDAuMy0wLjkKCUMxOC43LDE2LjgsMTksMTYuNiwxOS41LDE2LjR6IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsgc3Ryb2tlOiAjMjE2QzU4OyBzdHJva2Utd2lkdGg6IDAuNzsiLz4KPHJlY3QgeD0iMTkuMiIgeT0iMTUuMSIgd2lkdGg9IjEuOCIgaGVpZ2h0PSIyLjQiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cmVjdCB4PSIxOS4yIiB5PSIyMy44IiB3aWR0aD0iMS44IiBoZWlnaHQ9IjIuNSIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CjxyZWN0IHg9IjE5LjIiIHk9IjMxLjEiIHdpZHRoPSIxLjgiIGhlaWdodD0iMi40IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPHJlY3QgeD0iMjIuMSIgeT0iMTUuMSIgd2lkdGg9IjEuOCIgaGVpZ2h0PSIyLjQiIHN0eWxlPSJmaWxsOiAjRkZGRkZGOyIvPgo8cmVjdCB4PSIyMi4xIiB5PSIyMy44IiB3aWR0aD0iMS44IiBoZWlnaHQ9IjIuNSIgc3R5bGU9ImZpbGw6ICNGRkZGRkY7Ii8+CjxyZWN0IHg9IjIyLjEiIHk9IjMxLjEiIHdpZHRoPSIxLjgiIGhlaWdodD0iMi40IiBzdHlsZT0iZmlsbDogI0ZGRkZGRjsiLz4KPHBhdGggZD0iTTM4LjYsMjJjLTAuMywwLTAuNSwwLjItMC41LDAuNUMzNy4zLDMxLjMsMzAsMzguMiwyMSwzOC4yUzQuNywzMS4zLDMuOSwyMi41YzAtMC4zLTAuMy0wLjUtMC41LTAuNQoJYy0wLjMsMC0wLjUsMC4zLTAuNSwwLjZjMC44LDkuMyw4LjYsMTYuNiwxOC4xLDE2LjZzMTcuMy03LjMsMTguMS0xNi42QzM5LjIsMjIuMywzOC45LDIyLDM4LjYsMjJ6IE0zLjQsMjBjMC4zLDAsMC41LTAuMiwwLjUtMC41CglDNC43LDEwLjcsMTIsMy45LDIxLDMuOXMxNi4zLDYuOSwxNy4xLDE1LjZjMCwwLjMsMC4zLDAuNSwwLjUsMC41YzAuMywwLDAuNS0wLjMsMC41LTAuNkMzOC4zLDEwLjEsMzAuNSwyLjgsMjEsMi44CglTMy43LDEwLjEsMi45LDE5LjRDMi44LDE5LjcsMy4xLDIwLDMuNCwyMHoiIHN0eWxlPSJmaWxsLXJ1bGU6IGV2ZW5vZGQ7IGNsaXAtcnVsZTogZXZlbm9kZDsgZmlsbDogI0ZGRkZGRjsiLz4KPC9zdmc+Cg==) */
export const UsddCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-usdd-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

UsddCircleColorful.displayName = 'UsddCircleColorful';
