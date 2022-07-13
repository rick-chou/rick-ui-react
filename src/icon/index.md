---
nav:
  title: Icon
  path: /components
---

# Icon

- IconBlog
- IconGithub
- IconJueJin

## API

<API exports='["IconGithub"]' hideTitle></API>

## Demo

```tsx
import React from 'react';
// 生产环境使用 import '@one-piece-rick/react-ui/lib/index.css'
import '../../lib/index.css';
import { IconBlog, IconGithub, IconJueJin } from './index';

export default () => (
  <>
    <IconBlog style={{ display: 'inline-block', marginRight: '30px' }} />
    <IconGithub style={{ display: 'inline-block', marginRight: '30px' }} />
    <IconJueJin style={{ display: 'inline-block', marginRight: '30px' }} />
  </>
);
```
