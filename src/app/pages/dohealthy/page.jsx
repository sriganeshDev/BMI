"use client";

import Image from "next/image";

export default function DoHealthy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100  ">
      <h1 className="lg:text-2xl text-xl  lg:py-5 py-3 font-bold text-gray-900 text-center">
        Understand Your BMI and Health Better
      </h1>

      <div className="flex flex-col lg:pt-2 w-full max-w-7xl space-y-8">
        <div className="bg-white  rounded-xl  shadow-lg w-full overflow-x-auto">
          <Image
            src="/bmichart.png"
            alt="BMI Indexes Chart"
            width={1920}
            height={800}
            className="rounded-lg w-full object-contain"
          />
          <Image
            src="/bmi2.png"
            alt="BMI Categories"
            width={1200}
            height={200}
            className="rounded-lg w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full">
          <h2 className="text-xl max-md:text-lg font-bold mb-4">
            Importance of a BMI Calculator
          </h2>
          <p className="text-base max-md:text-sm text-gray-500 mb-4">
            BMI calculator plays a vital role to check whether a person is
            healthy or not. It is an easy-to-use tool for assessing the health
            of an individual and also works as the ‘Obesity Indicator.’
            Following reasons make BMI calculator a useful tool for public:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base max-md:text-sm text-gray-500">
            <li>
              <strong className="text-gray-900">
                Assessing body weight and related health risks:
              </strong>{" "}
              By using a BMI calculator, a physician can get an idea of the
              patient's current health status. Based on this, they can come up
              with a better treatment plan.
            </li>
            <li>
              <strong className="text-gray-900">Managing body weight:</strong>{" "}
              On an individual level, the BMI calculator works as an ‘Obesity
              Indicator,’ useful in managing how much weight one should lose or
              gain to be in the normal BMI range.
            </li>
            <li>
              <strong className="text-gray-900">
                Public health assessment:
              </strong>{" "}
              To prepare national health-related data, BMI plays a significant
              role.
            </li>
            <li>
              <strong className="text-gray-900">
                To determine insurance premium:
              </strong>{" "}
              Insurance companies often ask for BMI data when setting premiums.
            </li>
            <li>
              <strong className="text-gray-900">Weight Tracking:</strong> BMI
              calculators are beneficial for weight watchers during their
              journey.
            </li>
          </ul>

          <h2 className="text-xl max-md:text-lg font-bold mt-6 mb-4">
            BMI for Men
          </h2>
          <p className="text-base max-md:text-sm text-gray-500 mb-4">
            Lets take a look at the tabular bifurcation of BMI of men and
            understand how they are placed in the weight category basis their
            BMI:
          </p>
          <Image
            src="/table3.png"
            alt="BMI Categories"
            width={1200}
            height={200}
            className="rounded-lg mb-3.5 lg:p-5 w-full h-auto object-contain"
            priority
          />
          <p className="text-base max-md:text-sm text-gray-500 mb-4">
            For those above the age of 20 years, the ideal BMI for men ranges
            from 18.5 to 24.9. If the BMI for men falls below the BMI range of
            18.5, they are considered to be underweight and if it goes beyond
            the higher mark of 24.9, then they are treated under the overweight
            category.
          </p>
          <p className="text-base max-md:text-sm text-gray-500 mb-4">
            In both the cases of being underweight or overweight, the person in
            question is advised to take active steps to move towards the healthy
            range so as to avoid falling prey to any serious illness.
          </p>

          <h2 className="text-xl max-md:text-lg font-bold mt-5 mb-4 text-gray-900">
            What are the Steps to Maintain Optimum Health?
          </h2>
          <p className="text-base max-md:text-sm text-gray-500 mb-4">
            The following are some common advices that should be taken into
            consideration, if the goal is achieving good health:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base max-md:text-sm text-gray-500">
            <li>
              <strong className="text-gray-900">
                Maintain a healthy weight:
              </strong>{" "}
              This is important for your heart health and you can learn more
              about obesity and overweight.
            </li>
            <li>
              <strong className="text-gray-900">
                Include physical activity, gradually:
              </strong>{" "}
              Movement of the body, like{" "}
              <a
                href="#"
                className="text-blue-500 underline hover:text-blue-600"
              >
                regular running
              </a>
              , can help you lower your risk factors for many illnesses,
              especially heart diseases.
            </li>
            <li>
              <strong className="text-gray-900">
                Follow a heart-healthy diet:
              </strong>{" "}
              Eating healthy food is critical and essential to achieve good
              health. Going for natural foods instead of fast-foods made with
              artificial colours and additives is a good way to kick-start this
              health journey.
            </li>
            <li>
              <strong className="text-gray-900">
                Get acquainted with your heart health numbers:
              </strong>{" "}
              Tracking your health statistics can help you meet your health
              goals and let you keep it in control. BMI calculator helps in
              this. Keep a weighing scale at home and regularly check your
              weight. There shouldn’t be sudden changes. In case you notice
              something awry, the best thing would be to consult your physician.
            </li>
          </ul>

          <h2 className="text-xl max-md:text-lg font-bold mb-4 mt-5 text-gray-900">
            Limitations of BMI (Body Mass Index)
          </h2>
          <p className="text-base max-md:text-sm text-gray-500 mb-4">
            While BMI is a standard indicator of one's health status, especially
            in the field of health insurance and life insurance in India, it
            isn't a fool-proof system. While many BMI calculators do ask for
            one's gender and age along with their height and weight, due to a
            lack of differential BMI ranges, the BMI results don't reveal the
            exact picture.
          </p>
          <p className="text-base max-md:text-sm text-gray-500 mb-6">
            Let's understand the limitations of BMI for adults, children, and
            teenagers as explained below:
          </p>
          <ul className="list-disc pl-6 space-y-6 text-base max-md:text-sm text-gray-500">
            <li>
              <p>
                <strong className="text-gray-900">
                  No Male-Female Division:
                </strong>{" "}
                <br />A common disadvantage of BMI is that it doesn't take into
                account whether the person in question is male or female. It's
                basic science that males and females have different levels of
                body fat necessary for optimum condition of their physical and
                mental working.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-900">
                  No Difference Between Muscle and Fat:
                </strong>{" "}
                <br />
                When calculating BMI, one's height and weight are considered. It
                cannot distinguish between body fat and body muscle, leading to
                not-so-correct calculations. A person who does weight training
                and has a high-protein diet is going to have more muscles than
                fat. But BMI calculation cannot cut down the muscle-content from
                fat, resulting in a high BMI of that person.
              </p>
            </li>
            <li>
              <p>
                <strong className="text-gray-900">
                  BMI Limitation for Children:
                </strong>{" "}
                <br />A child's body is on an ongoing curve. Their BMI can
                fluctuate significantly because of continuing changes in their
                height as well as weight. An active child falling low on BMI
                will show them to be underweight, giving a false indication of
                poor health.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
