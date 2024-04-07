// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import SVGComponent from '../svgs/data-colorful.svg';

/**![DataColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0NC4wMSA0NDQiPjxkZWZzLz48dGl0bGU+c3RyZWFtci1kYXRhY29pbi1sb2dvPC90aXRsZT48ZyBpZD0iYW50LXdlYjMtaWNvbi1kYXRhLWNvbG9yZnVsLUxheWVyXzIiPjxnIGlkPSJhbnQtd2ViMy1pY29uLWRhdGEtY29sb3JmdWwtTGF5ZXJfMS0yIj48cGF0aCBkPSJNMjc3LjYxLDIwLjUyVjcuNzJBNy43MSw3LjcxLDAsMCwwLDI2OS45MiwwaC0uMzFhMTY2LjY3LDE2Ni42NywwLDAsMC0xNTguNSwxNTkuNjRjLjE5LDUuNDEsNC41Niw2LjgyLDcuMTMsNi44MmgxM2E3LjczLDcuNzMsMCwwLDAsNy43LTcuMzRBMTM4Ljg4LDEzOC44OCwwLDAsMSwyNzAuNDYsMjcuNzdjNS40Mi0uNjksNy4xNS0zLjY1LDcuMTUtNy4yNW0tMTE3LDE0NkgxNzNhNy43LDcuNywwLDAsMCw3LjYzLTcuMTgsOTcuMjMsOTcuMjMsMCwwLDEsOTAuNDMtODkuODIsNyw3LDAsMCwwLDYuNTMtNy4zNVY0OS40NWE3Ljc0LDcuNzQsMCwwLDAtNy43NS03LjcyLDQuMzUsNC4zNSwwLDAsMC0uNTEsMEExMjUsMTI1LDAsMCwwLDE1Mi44NywxNTguMjFhNy43NCw3Ljc0LDAsMCwwLDcuMiw4LjI0bC41MSwwbTExNy03NS4yMlYxMDRjMCw1LjItNC41Miw3LjA4LTYuNzIsNy4zNGE1NS41OCw1NS41OCwwLDAsMC00OC40MSw0OC4yOCw3Ljc4LDcuNzgsMCwwLDEtNy42OCw2Ljg3SDIwMi4zOGE3LjcsNy43LDAsMCwxLTcuNzMtNy42Niw2LDYsMCwwLDEsMC0uNzQsODMuMzYsODMuMzYsMCwwLDEsNzQuNTItNzQuNTMsNy42OCw3LjY4LDAsMCwxLDguMzYsNi45NCw2LjI4LDYuMjgsMCwwLDEsMCwuNzVabTE0NS44OCwxODZjLTMuNiwwLTYuNTYtMS43NC03LjI2LTcuMTVBMTM4LjkxLDEzOC45MSwwLDAsMCwyODQuODUsMTM4LjUyYTcuNzEsNy43MSwwLDAsMS03LjMzLTcuN3YtMTNjMC0yLjU3LDEuNDEtNi45NCw2LjgxLTcuMTNBMTY2LjY5LDE2Ni42OSwwLDAsMSw0NDQsMjY5LjE3YTcuNzEsNy43MSwwLDAsMS03LjQsOGgtLjMxWm0tMTQ2LTExN2E3LjcyLDcuNzIsMCwwLDEsNy43NC03LjcyLDQuNjEsNC42MSwwLDAsMSwuNTIsMEExMjUsMTI1LDAsMCwxLDQwMi4yNSwyNjlhNy43NSw3Ljc1LDAsMCwxLTcuMTksOC4yNGwtLjUxLDBIMzgxLjg4YTcsNywwLDAsMS03LjM1LTYuNTMsOTcuMjMsOTcuMjMsMCwwLDAtODkuODQtOTAuNDIsNy42Nyw3LjY3LDAsMCwxLTcuMTctNy42M1ptNzUuMjMsMTE3SDM0MGMtNS4yMSwwLTcuMDgtNC41Mi03LjM1LTYuNzNhNTUuNTgsNTUuNTgsMCwwLDAtNDguMjgtNDguNCw3Ljc1LDcuNzUsMCwwLDEtNi44Ny03LjY3VjIwMmE3LjY5LDcuNjksMCwwLDEsNy42NS03LjczLDYuMTIsNi4xMiwwLDAsMSwuNzQsMCw4My4zNSw4My4zNSwwLDAsMSw3NC41Miw3NC41MSw3LjY4LDcuNjgsMCwwLDEtNi45NCw4LjM1LDYsNiwwLDAsMS0uNzMsMFpNMjAuNTMsMTY2LjQ0YzMuNiwwLDYuNTYsMS43Myw3LjI2LDcuMTRBMTM4LjksMTM4LjksMCwwLDAsMTU5LjE3LDMwNS4xMmE3LjczLDcuNzMsMCwwLDEsNy4zMyw3Ljd2MTNjMCwyLjU4LTEuNDEsNi45NS02LjgxLDcuMTNBMTY2LjY4LDE2Ni42OCwwLDAsMSwwLDE3NC40OGE3LjcsNy43LDAsMCwxLDcuMzktOGguMzJabTE0NiwxMTdhNy43Myw3LjczLDAsMCwxLTcuNzUsNy43MWgtLjUxQTEyNSwxMjUsMCwwLDEsNDEuNzcsMTc0LjdhNy43Miw3LjcyLDAsMCwxLDcuMTYtOC4yNUg2Mi4xNEE3LDcsMCwwLDEsNjkuNDksMTczYTk3LjI0LDk3LjI0LDAsMCwwLDg5Ljg0LDkwLjQyLDcuNjcsNy42NywwLDAsMSw3LjE3LDcuNjNabS03NS4yMy0xMTdIMTA0YzUuMjEsMCw3LjA4LDQuNTIsNy4zNSw2LjcyYTU1LjYsNTUuNiwwLDAsMCw0OC4yOCw0OC40MSw3Ljc0LDcuNzQsMCwwLDEsNi44Nyw3LjY2djEyLjQzYTcuNzEsNy43MSwwLDAsMS03LjY2LDcuNzJjLS4yNSwwLS40OSwwLS43MywwYTgzLjM3LDgzLjM3LDAsMCwxLTc0LjUzLTc0LjUyLDcuNjgsNy42OCwwLDAsMSw3LTguMzZjLjI0LDAsLjQ4LDAsLjczLDBabTc1LjI3LDI1N2MwLTMuNiwxLjczLTYuNTYsNy4xNC03LjI1QTEzOC45MSwxMzguOTEsMCwwLDAsMzA1LjI0LDI4NC44N2E3LjcyLDcuNzIsMCwwLDEsNy43LTcuMzRoMTNjMi41NywwLDYuOTQsMS40MSw3LjEzLDYuODJBMTY2LjY4LDE2Ni42OCwwLDAsMSwxNzQuNTgsNDQ0YTcuNzIsNy43MiwwLDAsMS04LTcuNFY0MjMuNDRabTExNy0xNDZhNy43MSw3LjcxLDAsMCwxLDcuNzEsNy43NGMwLC4xNywwLC4zNCwwLC41MkExMjUsMTI1LDAsMCwxLDE3NC44LDQwMi4yNWE3Ljc1LDcuNzUsMCwwLDEtOC4yNS03LjE5YzAtLjE3LDAtLjM0LDAtLjUxVjM4MS44OGE3LDcsMCwwLDEsNi41My03LjM1LDk3LjI0LDk3LjI0LDAsMCwwLDkwLjQzLTg5LjgyLDcuNjcsNy42NywwLDAsMSw3LjYzLTcuMThabS0xMTcsNzUuMjJWMzQwYzAtNS4yLDQuNTMtNy4wOCw2LjczLTcuMzRhNTUuNjEsNTUuNjEsMCwwLDAsNDguNDEtNDguMjgsNy43Niw3Ljc2LDAsMCwxLDcuNjctNi44N2gxMi40M2E3LjY5LDcuNjksMCwwLDEsNy43Miw3LjY1cTAsLjM4LDAsLjc1QTgzLjM4LDgzLjM4LDAsMCwxLDE3NSwzNjAuNDJhNy42OSw3LjY5LDAsMCwxLTguMzYtNyw2LDYsMCwwLDEsMC0uNzNaIiBzdHlsZT0iZmlsbDogI2ZmNWMwMDsiLz48L2c+PC9nPjwvc3ZnPg==) */
export const DataColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-data-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={SVGComponent}
    />
  );
});

DataColorful.displayName = 'DataColorful';
