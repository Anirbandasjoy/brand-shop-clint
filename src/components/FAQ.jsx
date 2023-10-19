
import img from '../assets/f.jpg';

const Faq = () => {
    return (
        <div className='mt-16'>
            <h2 className="text-2xl font-semibold mb-4 text-center dark:text-white">Frequently Asked Questions</h2>
            <div className='flex flex-col lg:flex-row px-2 lg:px-0  gap-3 max-w-7xl [h-30rem] mx-auto'>
                <div className='flex-1'>
                    <div className="collapse dark:bg-gray-400 dark:text-white skew-y-5 collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title  text-xl font-medium">
                            How can I place an order?
                        </div>
                        <div className="collapse-content">
                            <p>You can place an order by visiting our product pages and clicking the Add to Cart button. Follow the steps to complete your purchase.</p>
                        </div>
                    </div>
                    <div className="collapse dark:bg-gray-400 dark:text-white collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />

                        <div className="collapse-content">
                            <p>We accept various payment methods, including credit/debit cards, PayPal, and more. You can choose your preferred payment option during checkout.</p>
                        </div>
                    </div>
                    <div className="collapse dark:bg-gray-400 dark:text-white collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Is there a warranty on your products?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we offer warranties on our products. The length of the warranty may vary depending on the product. Please check the product details for warranty information.</p>
                        </div>
                    </div>
                    <div className="collapse dark:bg-gray-400 dark:text-white collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How do I track my order?
                        </div>
                        <div className="collapse-content">
                            <p>Once your order is shipped, you will receive a tracking number via email. You can use this number to track the status and delivery of your order.</p>
                        </div>
                    </div>
                    <div className="collapse dark:bg-gray-400 dark:text-white collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Do you offer international shipping?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we offer international shipping. Additional charges may apply, and delivery times may vary depending on the destination. Please check our international shipping policy for details.</p>
                        </div>
                    </div>
                    <div className="collapse dark:bg-gray-400 dark:text-white collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I return a product if m not satisfied?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we have a return policy. If are not satisfied with your purchase, you can return the product within 30 days of receiving it. Please check our return policy for instructions.</p>
                        </div>
                    </div>
                    <div className="collapse dark:bg-gray-400 dark:text-white collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            How can I contact your customer support?
                        </div>
                        <div className="collapse-content">
                            <p>You can contact our customer support team through our Contact Us page or by sending an email to support@yourwebsite.com. We aim to respond to inquiries within 24 hours.</p>
                        </div>
                    </div>
                </div>

                <div className='flex-1'>
                    <img className='h-[30rem] w-full' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;
