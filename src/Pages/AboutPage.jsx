export default function AboutPage() {
    return (
      <div className="about-page container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">About Crafty Furnishings</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Contacts</h2>
            <p className="mb-4">
              You can reach out to us via email at craftyfurnnishings@gmail.com or call us at (123) 456-7890.
            </p>
            <p className="mb-4">
              Our mission is to combine exceptional craftsmanship with contemporary design, offering 
              pieces that are both beautiful and built to last.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Handcrafted furniture using sustainable materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>6-month warranty on all goods</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Free delivery on orders over $500</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Professional assembly services available</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Visit Our Showroom</h2>
          <p className="mb-4">
            123 Furniture Avenue, Design District<br />
            Open Monday-Saturday 10am-7pm
          </p>
          
        </div>
      </div>
    );
  }