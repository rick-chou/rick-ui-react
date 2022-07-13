---
nav:
  title: Assets
  path: /components
---

# Assets

> Assets 由 https://github.com/rick-chou/rick-assets 维护

## Demo

```tsx
import React from 'react';
import { getAssetsUrl } from './index';
import Player from '../player';

export default () => (
  <>
    <div style={{ marginBottom: 50 }}>
      <img src={getAssetsUrl('png', 3)} style={{ width: 100, display: 'inline-block' }} />
      <img src={getAssetsUrl('png', 27)} style={{ width: 100, display: 'inline-block' }} />
      <img src={getAssetsUrl('png', 5)} style={{ width: 100, display: 'inline-block' }} />
      <img src={getAssetsUrl('png', 6)} style={{ width: 100, display: 'inline-block' }} />
      <img src={getAssetsUrl('png', 13)} style={{ width: 100, display: 'inline-block' }} />
      <img src={getAssetsUrl('png', 8)} style={{ width: 100, display: 'inline-block' }} />
      <img src={getAssetsUrl('png', 9)} style={{ width: 100, display: 'inline-block' }} />
      <img src={getAssetsUrl('png', 10)} style={{ width: 100, display: 'inline-block' }} />
    </div>
    <div style={{ marginBottom: 50 }}>
      <img src={getAssetsUrl('jpg', 40)} />
    </div>
    <div style={{ marginBottom: 50 }}>
      <video controls playsInline src={getAssetsUrl('video/hutao.mp4')} />
    </div>
  </>
);
```
