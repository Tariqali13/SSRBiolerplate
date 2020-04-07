import React, { Fragment } from "react";
import { CDN_URL } from "../../../constants";
const Faq = () => {
  return (
    <Fragment>
      <div className="faqs-holder">
        <div className="faq-header">
          <img src={`${CDN_URL}/assets/faq-icon.png`} alt="FAQS" />
          <p>
            Got a Question? We have the <strong>Answer!</strong>
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="faq">
              <h3>Do I need technical or coding skils?</h3>
              <p>
                None needed. Our platform is simple and streamlined to help you
                grow a profitable online business.
              </p>
            </div>

            <div className="faq">
              <h3>Which plan is best for me?</h3>
              <p>
                The Pro plan is the most popular plan especially for those who
                are ready to scale their online business. You can start with a
                Basic plan to get the hang of things.
              </p>
            </div>

            <div className="faq">
              <h3>Can I use or create my own domain name?</h3>
              <p>
                On our plans and above, you can use your own domain name
                (yourdomain.com). Also, every Vonza plan comes with a free{" "}
                <span>yourplatform.vonza.com</span> domain name that you’re
                welcome to use.
              </p>
            </div>

            <div className="faq">
              <h3>How do transaction fees work?</h3>
              <p>
                Every time a user purchases a course, product , or subscription,
                we collect a transaction fee according to your pricing plan.
                Please note that Basic, Pro and Premium plans have no
                transaction fees. For any plan using the Vonza, you pay a{" "}
                <span>
                  standard stripe merchant processing fee of 2.9% + $0.30 on all
                  transactions.{" "}
                </span>
                .
              </p>
            </div>

            <div className="faq">
              <h3>When do I get paid?</h3>
              <p>
                You get paid to your designated account when you receive money
                on Vonza platform.
              </p>
            </div>

            <div className="faq">
              <h3>
                What happens if I canot set up direct payouts via Vonza
                Payments, Stripe Connect or PayPal?
              </h3>
              <p>
                If you cannot set up Vonza Payments or custom payment gateways
                (available on Professional plan or above), Vonza can collect
                funds for you and pay you on our regular payment schedule.
              </p>
              <p>
                When using the Monthly Payment Gateway, there is a processing
                fee of 2.9% + 30¢ for US transactions (credit cards and PayPal).
                For international transactions, there is an additional 3.9% +
                30¢ fee for credit cards, and 4.4% + 30¢ fee for PayPal
                payments. These are standard rates charged by Stripe & PayPal.
                Additionally, you’re charged a transaction fee that varies based
                on your plan:{" "}
              </p>
              <p>
                Free: 10% + $1 <br />
                Basic: 5% <br />
                Pro: 0% <br />
                Premier: 0%
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="faq">
              <h3>Do I own my content?</h3>
              <p>
                Absolutely! You always own your user data and your content. You
                can export your data at any time.
              </p>
            </div>

            <div className="faq">
              <h3>Do you charge a setup fee?</h3>
              <p>
                Nope, there are no “setup” fees. Just choose a plan and get
                started.
              </p>
            </div>

            <div className="faq">
              <h3>What if I want to cancel?</h3>
              <p>
                You can cancel your plan on Vonza whenever you decide. Since you
                own all of your data and courses as well as the domain name (if
                its custom), you can download your course(s), user, and revenue
                information so you can build your own website or use another
                service.
              </p>
            </div>

            <div className="faq">
              <h3>Will I be charged sales tax on my Vonza plan?</h3>
              <p>
                Sales tax is charged on subscription in certain locations.
                Please check with your local tax advisors.
              </p>
            </div>

            <div className="faq">
              <h3>Do I need a web host?</h3>
              <p>
                No!. Vonza hosts all your website platform content (even though,
                to your audience, it looks like you’re hosting it!).
              </p>
            </div>

            <div className="faq">
              <h3>Can I offer free courses or products with Vonza?</h3>
              <p>
                Absolutely! And when you create a free course or product, we do
                not charge any fees on enrollments.
              </p>
            </div>

            <div className="faq">
              <h3>Do I need a payment processor?</h3>
              <p>
                We provide an SSL certificate to help ensure that all your data
                and customer information is secure. Note that transaction fees
                may apply if third party payment processors are used. Vonza
                handles the payment processing for you, so you don’t need a
                separate processor. We accept credit card, debit card, and
                PayPal.
              </p>
            </div>

            <div className="faq">
              <h3>Is there a limit to how much content I can upload?</h3>
              <p>
                Every Vonza plan includes both limited and unlimited videos and
                courses upload. Upload as many courses, videos, PDFs, etc. as
                you like.
              </p>
            </div>
            <div className="faq">
              <h3>Who can I contact with additional questions?</h3>
              <p>
                After creating an account, you can easily submit a support
                ticket from the admin area. Alternatively, you are always
                welcome to contact us through our <span>help form</span> if you
                have any questions prior to creating your first course.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="success-story-widget">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={`${CDN_URL}/assets/img-success-story.png`}
                alt="Success Story"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <div className="success-story-txt">
                <h3>Vonza Success Story</h3>
                <p>
                  &ldquo; I've been using Vonza in my online business to deliver
                  courses and products to my customers. In my first month using
                  Vonza my net income was $2000 and my business has been growing
                  ever since. One of the best parts for me in using Vonza is
                  that i don't have to have a separate website, online course
                  platform, membership software, landing pages, funnels and
                  event management and still figure out how to tie them all
                  together to work. I'll never have to go through that again
                  because of Vonza! &rdquo;
                </p>
                <h4>Hetty Asiodu (Life Coach & Author)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
