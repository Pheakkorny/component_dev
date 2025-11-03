import React, { useState } from 'react';
import { Button } from '../../components';
import type { ButtonVariant, ButtonSize, ButtonShape } from '../../components';
import './ButtonPage.css';

export const ButtonPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [buttonTypeDemo, setButtonTypeDemo] = useState('');

  const variants: ButtonVariant[] = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
  ];

  const outlineVariants: ButtonVariant[] = [
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
  ];

  const sizes: ButtonSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
  const shapes: ButtonShape[] = ['rectangle', 'rounded', 'pill', 'circle'];

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  const handleButtonTypeDemo = (type: string) => {
    setButtonTypeDemo(`${type} button clicked!`);
    setTimeout(() => setButtonTypeDemo(''), 2000);
  };

  return (
    <div className="button-page">
      <header className="page-header">
        <h1>Button Component</h1>
        <p>
          A versatile button component with multiple variants, sizes, shapes, and states.
          Fully customizable and accessible with all props demonstrated below.
        </p>
      </header>

      <section className="demo-section">
        <h2>Variants</h2>
        <div className="demo-grid">
          {variants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>Outline Variants</h2>
        <div className="demo-grid">
          {outlineVariants.map((variant) => (
            <Button key={variant} variant={variant}>
              {variant.split('-')[1].charAt(0).toUpperCase() + variant.split('-')[1].slice(1)}
            </Button>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>Sizes</h2>
        <div className="demo-grid">
          {sizes.map((size) => (
            <Button key={size} size={size} variant="primary">
              Size {size.toUpperCase()}
            </Button>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>Shapes</h2>
        <div className="demo-grid">
          {shapes.map((shape) => (
            <Button key={shape} shape={shape} variant="primary">
              {shape === 'circle' ? '⭐' : shape.charAt(0).toUpperCase() + shape.slice(1)}
            </Button>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>States (disabled, loading)</h2>
        <div className="demo-grid">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
          <Button loading={loading} onClick={handleLoadingClick}>
            {loading ? 'Loading...' : 'Click to Load'}
          </Button>
          <Button variant="danger" disabled loading>
            Disabled + Loading
          </Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>Full Width</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Button fullWidth variant="primary">
            Full Width Primary Button
          </Button>
          <Button fullWidth variant="success" icon={<span>✓</span>}>
            Full Width with Icon
          </Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>Custom Width Props (width, minWidth, maxWidth)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          <Button width={200} variant="primary">
            width={'{'}200{'}'}
          </Button>
          <Button width="300px" variant="secondary">
            width="300px"
          </Button>
          <Button minWidth={250} variant="success">
            minWidth={'{'}250{'}'}
          </Button>
          <Button maxWidth={150} variant="warning">
            maxWidth 150px
          </Button>
          <Button width="100%" variant="info">
            width="100%"
          </Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>Icons (icon, iconPosition)</h2>
        <div className="demo-grid">
          <Button variant="primary" icon={<span>👍</span>} iconPosition="left">
            Like
          </Button>
          <Button variant="success" icon={<span>✓</span>} iconPosition="left">
            Confirm
          </Button>
          <Button variant="danger" icon={<span>🗑️</span>} iconPosition="left">
            Delete
          </Button>
          <Button variant="info" icon={<span>→</span>} iconPosition="right">
            Next
          </Button>
          <Button variant="warning" icon={<span>📥</span>} iconPosition="left">
            Download
          </Button>
          <Button variant="secondary" icon={<span>⚙️</span>} iconPosition="right">
            Settings
          </Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>onClick Handler</h2>
        <div className="interactive-demo">
          <div className="demo-controls">
            <p>Click count: <strong>{clickCount}</strong></p>
            <Button 
              variant="primary" 
              size="lg"
              onClick={handleClick}
            >
              Click Me!
            </Button>
            <Button 
              variant="danger" 
              size="sm"
              onClick={() => setClickCount(0)}
            >
              Reset Count
            </Button>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2>Button Type (button, submit, reset)</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Button type="submit" variant="success" onClick={() => handleButtonTypeDemo('Submit')}>
              Submit (type="submit")
            </Button>
            <Button type="reset" variant="warning" onClick={() => handleButtonTypeDemo('Reset')}>
              Reset (type="reset")
            </Button>
            <Button type="button" variant="secondary" onClick={() => handleButtonTypeDemo('Button')}>
              Button (type="button")
            </Button>
          </div>
          {buttonTypeDemo && (
            <div className="status-message">
              {buttonTypeDemo}
            </div>
          )}
        </div>
      </section>

      <section className="demo-section">
        <h2>Custom className</h2>
        <div className="demo-grid">
          <Button 
            className="custom-class-demo" 
            variant="primary"
          >
            With Custom Class
          </Button>
          <Button variant="success">
            Without Custom Class
          </Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>Combined Props Example</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          <Button 
            variant="primary"
            size="lg"
            shape="rounded"
            icon={<span>🚀</span>}
            iconPosition="left"
            onClick={() => alert('Launch!')}
          >
            Launch Application
          </Button>
          
          <Button 
            variant="outline-danger"
            size="md"
            shape="pill"
            icon={<span>❌</span>}
            iconPosition="right"
            disabled
            width={200}
          >
            Disabled Action
          </Button>
          
          <Button 
            variant="success"
            size="sm"
            icon={<span>💾</span>}
            loading={loading}
            fullWidth
            onClick={handleLoadingClick}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>Code Example</h2>
        <div className="code-block">
          <pre>
            <code>
              {`import { Button } from './components';
              function MyComponent() {
                return (
                  <>
                    <Button variant="primary" size="md">
                      Primary Button
                    </Button>
                    
                    <Button 
                      variant="success" 
                      icon={<span>✓</span>}
                      onClick={() => console.log('Clicked!')}
                    >
                      Submit
                    </Button>
                    
                    <Button 
                      variant="outline-danger"
                      disabled
                    >
                      Disabled
                    </Button>
                    
                    <Button
                      fullWidth
                      loading={true}
                      width={300}
                    >
                      Custom Width Loading
                    </Button>
                  </>
                );
              }`}</code>
          </pre>
        </div>
      </section>

      <section className="demo-section">
        <h2>Props Reference</h2>
        <div className="props-table">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>children</code></td>
                <td>ReactNode</td>
                <td>required</td>
                <td>Button content/text</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td>ButtonVariant</td>
                <td>'primary'</td>
                <td>Visual style: primary, secondary, success, danger, warning, info, outline variants</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>ButtonSize</td>
                <td>'md'</td>
                <td>Size: xs, sm, md, lg, xl</td>
              </tr>
              <tr>
                <td><code>shape</code></td>
                <td>ButtonShape</td>
                <td>'rectangle'</td>
                <td>Shape: rectangle, rounded, pill, circle</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Disables the button and prevents interaction</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Shows loading spinner and prevents interaction</td>
              </tr>
              <tr>
                <td><code>fullWidth</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Makes button expand to full container width</td>
              </tr>
              <tr>
                <td><code>width</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Custom width (e.g., 200 or "300px" or "50%")</td>
              </tr>
              <tr>
                <td><code>minWidth</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Minimum width constraint</td>
              </tr>
              <tr>
                <td><code>maxWidth</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Maximum width constraint</td>
              </tr>
              <tr>
                <td><code>icon</code></td>
                <td>ReactNode</td>
                <td>-</td>
                <td>Icon element to display with button text</td>
              </tr>
              <tr>
                <td><code>iconPosition</code></td>
                <td>'left' | 'right'</td>
                <td>'left'</td>
                <td>Position of icon relative to text</td>
              </tr>
              <tr>
                <td><code>onClick</code></td>
                <td>function</td>
                <td>-</td>
                <td>Click event handler (MouseEvent)</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td>'button' | 'submit' | 'reset'</td>
                <td>'button'</td>
                <td>HTML button type attribute</td>
              </tr>
              <tr>
                <td><code>className</code></td>
                <td>string</td>
                <td>''</td>
                <td>Additional CSS classes to apply</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};