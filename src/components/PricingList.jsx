import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex flex-wrap gap-10 mb-10">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-14 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            <img
                src={item.price}
                width={230}
                height={55}
                alt={item.title}
            />
          </div>

          {/*<Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>*/}

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
