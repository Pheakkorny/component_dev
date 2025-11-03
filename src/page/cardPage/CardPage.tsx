import React, { useState } from 'react';
import { Button } from '../../components';
import { Card, CardHeader, CardBody, CardFooter, CardImage } from '../../components';
import type { CardVariant, CardSize, CardPadding } from '../../components';
import './CardPage.css';

export const CardPage: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const variants: CardVariant[] = ['default', 'elevated', 'outlined', 'filled'];
  const sizes: CardSize[] = ['sm', 'md', 'lg', 'xl'];
  const paddings: CardPadding[] = ['none', 'sm', 'md', 'lg', 'xl'];

  return (
    <div className="card-page">
      <header className="page-header">
        <h1>Card Component</h1>
        <p>
          A flexible card component for displaying content in a contained, organized way.
          Supports multiple variants, sizes, and customization options.
        </p>
      </header>

      <section className="demo-section">
        <h2>Basic Card</h2>
        <div className="demo-grid">
          <Card padding="md">
            <CardBody>
              This is a basic card with default settings.
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>Variants</h2>
        <div className="demo-grid">
          {variants.map((variant) => (
            <Card key={variant} variant={variant} padding="md">
              <CardBody>
                <strong>{variant.charAt(0).toUpperCase() + variant.slice(1)}</strong>
                <p>This is a {variant} card variant.</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>Sizes</h2>
        <div className="demo-grid">
          {sizes.map((size) => (
            <Card key={size} size={size} variant="elevated" padding="md">
              <CardBody>
                Size: <strong>{size.toUpperCase()}</strong>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>Padding Options</h2>
        <div className="demo-grid">
          {paddings.map((padding) => (
            <Card key={padding} padding={padding} variant="outlined">
              <CardBody>
                Padding: <strong>{padding}</strong>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-section">
        <h2>Card with Header and Footer</h2>
        <div className="demo-grid">
          <Card variant="elevated" maxWidth={400}>
            <CardHeader
              title="Card Title"
              subtitle="Card subtitle goes here"
              avatar={<div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>A</div>}
              action={<Button size="sm" variant="outline-primary">Edit</Button>}
            />
            <CardBody>
              This card has a header with title, subtitle, avatar, and action button.
              The body contains the main content.
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="secondary">Cancel</Button>
              <Button size="sm" variant="primary">Save</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>Card with Image</h2>
        <div className="demo-grid">
          <Card variant="elevated" maxWidth={350}>
            <CardImage
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4"
              alt="Mountain landscape"
              height={200}
            />
            <CardBody>
              <h3 style={{ marginTop: 0 }}>Beautiful Landscape</h3>
              <p>This card includes an image at the top with content below.</p>
            </CardBody>
            <CardFooter>
              <Button size="sm" variant="primary" icon={<span>❤️</span>}>
                Like
              </Button>
              <Button size="sm" variant="outline-primary">Share</Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" maxWidth={350}>
            <CardImage
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
              alt="Nature"
              height={200}
            />
            <CardHeader
              title="Nature Photography"
              subtitle="Captured in 2024"
            />
            <CardBody>
              Explore the beauty of nature through stunning photography.
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>Interactive Cards (hoverable, clickable)</h2>
        <div className="demo-grid">
          <Card variant="elevated" hoverable padding="md" maxWidth={300}>
            <CardBody>
              <strong>Hoverable Card</strong>
              <p>Hover over me to see the effect!</p>
            </CardBody>
          </Card>

          <Card
            variant="outlined"
            clickable
            hoverable
            padding="md"
            maxWidth={300}
            onClick={() => setClickCount(prev => prev + 1)}
          >
            <CardBody>
              <strong>Clickable Card</strong>
              <p>Clicked {clickCount} times</p>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>Custom Width & Height</h2>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Card width={250} variant="filled" padding="md">
            <CardBody>width: 250px</CardBody>
          </Card>

          <Card width="300px" height={150} variant="elevated" padding="md">
            <CardBody>width: 300px, height: 150px</CardBody>
          </Card>

          <Card minWidth={200} maxWidth={350} variant="outlined" padding="md">
            <CardBody>minWidth: 200px, maxWidth: 350px</CardBody>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>Border & Shadow Options</h2>
        <div className="demo-grid">
          <Card bordered padding="md">
            <CardBody>Card with border</CardBody>
          </Card>

          <Card shadow padding="md">
            <CardBody>Card with shadow</CardBody>
          </Card>

          <Card bordered shadow padding="md">
            <CardBody>Card with border and shadow</CardBody>
          </Card>

          <Card rounded={false} bordered padding="md">
            <CardBody>Card without rounded corners</CardBody>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>Product Card Example</h2>
        <div className="demo-grid">
          <Card variant="elevated" hoverable maxWidth={300}>
            <CardImage
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Product"
              height={250}
            />
            <CardBody>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Premium Watch</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Elegant timepiece with modern design
              </p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                $299.99
              </div>
            </CardBody>
            <CardFooter>
              <Button fullWidth variant="primary" icon={<span>🛒</span>}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>

          <Card variant="elevated" hoverable maxWidth={300}>
            <CardImage
              src="https://images.unsplash.com/photo-1572635196237-14b3f281503f"
              alt="Product"
              height={250}
            />
            <CardBody>
              <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Sunglasses</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>
                UV protection with style
              </p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                $149.99
              </div>
            </CardBody>
            <CardFooter>
              <Button fullWidth variant="primary" icon={<span>🛒</span>}>
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2>Code Examples</h2>
        <div className="code-block">
          <pre>
            <code>{`// Basic Card
import { Card, CardBody } from './components';

<Card padding="md">
  <CardBody>
    This is a basic card with default settings.
  </CardBody>
</Card>

// Card with Header and Footer
import { Card, CardHeader, CardBody, CardFooter, Button } from './components';

<Card variant="elevated" maxWidth={400}>
  <CardHeader
    title="Card Title"
    subtitle="Card subtitle"
    avatar={<Avatar>A</Avatar>}
    action={<Button size="sm">Edit</Button>}
  />
  <CardBody>
    Main content goes here.
  </CardBody>
  <CardFooter>
    <Button size="sm" variant="secondary">Cancel</Button>
    <Button size="sm" variant="primary">Save</Button>
  </CardFooter>
</Card>

// Card with Image
import { Card, CardImage, CardBody, CardFooter } from './components';

<Card variant="elevated" maxWidth={350}>
  <CardImage
    src="/path/to/image.jpg"
    alt="Description"
    height={200}
  />
  <CardBody>
    <h3>Image Title</h3>
    <p>Image description goes here.</p>
  </CardBody>
  <CardFooter>
    <Button size="sm" icon={<span>❤️</span>}>Like</Button>
    <Button size="sm">Share</Button>
  </CardFooter>
</Card>

// Interactive Card
import { Card, CardBody } from './components';

const [count, setCount] = useState(0);

<Card
  variant="outlined"
  clickable
  hoverable
  padding="md"
  onClick={() => setCount(prev => prev + 1)}
>
  <CardBody>
    <strong>Clickable Card</strong>
    <p>Clicked {count} times</p>
  </CardBody>
</Card>

// Product Card
<Card variant="elevated" hoverable maxWidth={300}>
  <CardImage
    src="/product.jpg"
    alt="Product"
    height={250}
  />
  <CardBody>
    <h3>Product Name</h3>
    <p>Product description</p>
    <div style={{ 
      fontSize: '24px', 
      fontWeight: 'bold', 
      color: 'var(--primary-color)' 
    }}>
      $299.99
    </div>
  </CardBody>
  <CardFooter>
    <Button fullWidth variant="primary" icon={<span>🛒</span>}>
      Add to Cart
    </Button>
  </CardFooter>
</Card>

// Custom Dimensions
<Card 
  width={300} 
  height={200} 
  variant="filled" 
  padding="lg"
>
  <CardBody>Custom size card</CardBody>
</Card>

// With Border and Shadow
<Card 
  bordered 
  shadow 
  padding="md"
  hoverable
>
  <CardBody>Styled card</CardBody>
</Card>

// Different Variants
<Card variant="default" padding="md">
  <CardBody>Default variant</CardBody>
</Card>

<Card variant="elevated" padding="md">
  <CardBody>Elevated variant</CardBody>
</Card>

<Card variant="outlined" padding="md">
  <CardBody>Outlined variant</CardBody>
</Card>

<Card variant="filled" padding="md">
  <CardBody>Filled variant</CardBody>
</Card>`}</code>
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
                <td>Card content</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td>CardVariant</td>
                <td>'default'</td>
                <td>Visual style: default, elevated, outlined, filled</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>CardSize</td>
                <td>'md'</td>
                <td>Font size: sm, md, lg, xl</td>
              </tr>
              <tr>
                <td><code>padding</code></td>
                <td>CardPadding</td>
                <td>'none'</td>
                <td>Internal padding: none, sm, md, lg, xl</td>
              </tr>
              <tr>
                <td><code>hoverable</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Adds hover animation effect</td>
              </tr>
              <tr>
                <td><code>clickable</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Makes card clickable with cursor pointer</td>
              </tr>
              <tr>
                <td><code>bordered</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Adds border to card</td>
              </tr>
              <tr>
                <td><code>rounded</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Applies rounded corners</td>
              </tr>
              <tr>
                <td><code>shadow</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Adds box shadow</td>
              </tr>
              <tr>
                <td><code>width</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Custom width</td>
              </tr>
              <tr>
                <td><code>minWidth</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Minimum width</td>
              </tr>
              <tr>
                <td><code>maxWidth</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Maximum width</td>
              </tr>
              <tr>
                <td><code>height</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Custom height</td>
              </tr>
              <tr>
                <td><code>minHeight</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Minimum height</td>
              </tr>
              <tr>
                <td><code>maxHeight</code></td>
                <td>string | number</td>
                <td>-</td>
                <td>Maximum height</td>
              </tr>
              <tr>
                <td><code>onClick</code></td>
                <td>function</td>
                <td>-</td>
                <td>Click handler (requires clickable=true)</td>
              </tr>
              <tr>
                <td><code>className</code></td>
                <td>string</td>
                <td>''</td>
                <td>Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};