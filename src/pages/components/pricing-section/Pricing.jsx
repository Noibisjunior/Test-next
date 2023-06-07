import React from 'react';
import PricingCard from './Card';

const PricingSection = () => {
  return (
    <section className="AboutSection">
      <div className="AboutSection__left">
        <h3 className="Heading--tertiary">
          All packages come with 30 minutes of free business consultation
        </h3>
        <h2 className="Heading--secondary">Pricing</h2>
        <p>For all applications (Mobile or Web apps) please contact us.</p>
        <p>Prices range from $1,000 - $10,000</p>
        <hr />
      </div>
      <div className="AboutSection__right">
        <PricingCard
          title="Luxury Ecommerce Website Dev & Maintenance"
          monthlyPrice="200"
          yearlyPrice="2000"
          description="This package comes with: website copywriting, website design, custom development (animations / other requests), store, cms and up to 5 pages. Delivery time 8 weeks."
        />
        <PricingCard
          title="Luxury Branding & Marketing"
          monthlyPrice="65"
          yearlyPrice="650"
          description="This package comes with a beautiful custom made branding and marketing website. You will assist in the layout design and other aspects of the website creation process. Delivery time: 8 weeks"
        />
        <PricingCard
          title="Ecommerce Website Dev & Maintenance"
          monthlyPrice="75"
          yearlyPrice="720"
          description="This package comes with development and design of a shopify website, assistance with payment gateway setup, shipping and handling setup and payment of any fees associated with website(shopify and domain hosting). Delivery time: 5 weeks"
        />
        <PricingCard
          title="Ecommerce Website Setup"
          flatPrice="300"
          description="This package comes with a lite redesign of your current shopify template website, assistance with payment gateway setup, shipping and handling setup and or any other requested services to add to the website. Hosting monthly fees may apply. Delivery time: 2 weeks"
        />
        <PricingCard
          title="Branding & Marketing"
          monthlyPrice="40"
          yearlyPrice="350"
          description="This package will allow you to create a website using one of our premade templates. Delivery time: 1 week"
        />
      </div>
    </section>
  );
};

export default PricingSection;
