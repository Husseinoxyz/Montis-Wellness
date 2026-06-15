import { Heart, FlaskConical, Flame, User, UserCog, Apple, Sparkles, Scale } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  iconImage: string;
  heroImage: string;
  description: string;
  content: React.ReactNode;
}

export const services: Service[] = [
  {
    id: 'heart-angiotherapy',
    title: 'Heart via Angiotherapy',
    subtitle: 'Non-invasive heart recovery and cardiovascular wellness',
    icon: Heart,
    iconImage: '/service icons/Heart via Angiotherapy.png',
    heroImage: '/hero-heart.png',
    description: 'Advanced non-invasive angiotherapy treatment for chronic angina, heart disease recovery, and COQ10 therapy.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Don't Miss a Beat</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heart diseases are a growing concern worldwide and an important cause of sickness and death globally. Multiple treatment options are available for the treatment of the various types of heart diseases that can improve heart health and promote recovery.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Diet and lifestyle changes are common treatment options used to improve heart health. Modern medicines, such as statins and beta blockers are also available that help to treat heart diseases. These medicines can also be used together with diet and lifestyle changes to improve heart health.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Selecting the right heart treatment plan is an important first step in heart disease recovery. It is important to be familiar with the side effects of heart medications, especially on your body. This information should guide the creation of a heart care management plan that is effective in heart disease treatment and recovery.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Types of Heart Medications</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The treatment of heart disease has improved over the past decades. Exercises, lifestyle changes, and improved diet are usually the first interventions recommended by doctors before the administration of medications.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">To discuss heart recovery, it is important to understand the drugs used to treat heart diseases. Some of the heart drugs commonly administered include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Beta-blockers</strong> - Beta-blockers block the action of chemicals, such as adrenaline that can excite your heart. Beta-blockers are used to treat hypertension, irregular heartbeats, and heart failure, and prevent heart attacks. Propanolol and metoprolol are examples of beta-blockers commonly prescribed by doctors.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Calcium blockers</strong> - Calcium blockers block the entry of calcium into the heart and blood vessels. These drugs are used to relax the heart and reduce the workload. Calcium blockers are used to treat hypertension and prevent heart attacks. Amlodipine is a very common calcium blocker.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Statins</strong> - Statins are used to reduce the level of bad cholesterol in the blood. Bad cholesterol is the LDL cholesterol and can build up to cause heart and vessel disease. Statins include simvastatin and atorvastatin.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Anticoagulants</strong> - Just like antiplatelet agents, anticoagulants also prevent the formation of blood clots but they do this differently. Anticoagulants work by preventing clotting factors from getting activated. Examples of anticoagulants include warfarin and heparin.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>ACE Inhibitors</strong> - Angiotensin Converting Enzyme (ACE) Inhibitors block the production of angiotensin in the body. ACE inhibitors are also used to treat hypertension, and can prevent heart attacks. Examples include captopril and benazepril.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Selecting a Heart Treatment Plan</h3>
          <p className="text-gray-700 leading-relaxed mb-4">When choosing a treatment plan, make sure to consult with your doctor with questions like:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">How can these medications help relieve my symptoms?</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">How can these medications interfere with other drugs I am on?</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">What other adjustments to my lifestyle and diet can I make to improve recovery?</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">What side effects can be caused by the use of these heart medications?</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Every heart medication can cause different side effects that can make recovery challenging. Common side effects include: cough (caused by ACE inhibitors), dehydration and thirst, increased urination, dark-red colored urine, headache, and abnormal nose and gum bleeding.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Monitoring Heart Recovery</h3>
          <p className="text-gray-700 leading-relaxed mb-4">When you are using heart medications, or other heart treatment therapies, it is important to monitor heart recovery. Various tests are available that can be used to check heart performance and make sure treatment is working. Tests that can be used to monitor recovery include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Echocardiogram</strong> - Echocardiograms or heart echo scans use ultrasound to visualize the heart and blood vessels. These scans can be used to monitor heart muscle and valve performance.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Electrocardiogram (ECG)</strong> - ECG is used to monitor the electrical activity of the heart. This test can be used to monitor heart rate and proper heart conduction.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Blood Test</strong> - Routine blood tests can be used to check for heart enzymes in the blood. Cardiac enzymes such as troponin and creatinine phosphokinase (CPK) are elevated after a heart attack.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Full body scans</strong> - such as imaging scans (CT and MRI)</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heart Rate Variability Analysis</strong> - This test measures the variations in the time interval between consecutive heartbeats. Heart rate variability analysis can be used to predict the adverse effects of heart disease in high-risk persons.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Heart Recovery using Non-invasive Method</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Angio therapy is a non-invasive treatment therapy used to treat chronic angina (chest pain) in patients with heart disease. Angio therapy makes use of specific pressures to improve blood flow in the body.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Angio therapy works by applying pressure on the blood vessels in the legs and feet to improve blood flow. Improved blood flow in the lower limbs can improve blood flow back to the heart, and make the heart function better.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our heart recovery program has also been shown to improve positive outcomes in the patients' management. A 2015 study revealed the effects of Angio therapy to improve glycemic indexes in patients, including fasting plasma glucose (FPG), postprandial random plasma glucose (RPG), and glycated hemoglobin (HbA1c) within 48 hours, and 2 weeks after the start of therapy.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">To be eligible for Angio therapy you need to pass certain criteria which include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Free of heart diseases such as valvular disease, pulmonary hypertension, peripheral artery disease, and aortic insufficiency.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Must have a normal Heart Rate Variability (HRV) Analysis</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">You do not currently use a pacemaker</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">You are ineligible for invasive heart surgeries</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Medications are no longer as effective as before</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Angio therapy can be done at home by trained professionals and does not require any medications. Angio therapy is normally done at least one hour a day, five days every week, for seven total weeks.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Angio therapy is a great alternative for heart medications and surgery, especially for heart disease that is not severe. Side effects and complications are minimal, and may include: skin irritation, muscle fatigue and aches, bruising, and tingling in legs and feet.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Coenzyme Q10 (COQ10) Therapy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Coenzyme Q10, also known as ubiquinone and ubiquinol is a powerful antioxidant that is naturally found in the body. COQ10 is produced in most body cells to protect them from damage due to oxidative stress. Coenzyme Q10 can also be found naturally in foods, such as fish, meat, and healthy vegetable oils.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The levels of COQ10 are seen to reduce with age, and this is associated with an increased risk of heart diseases, faster disease progression, and impaired heart recovery, especially in older patients. Coenzyme Q10 has also been shown to have anti-inflammatory properties and it is effective in the management of heart failure in patients.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Administration of COQ10 injections restores the levels of COQ10 in the plasma. COQ10 injections provide an alternative in the management of heart diseases, prevention of recurrence, and promotion of healthy heart recovery. At our centers, we are specialized in COQ10 therapy in the management of heart health. COQ10 at our centers are administered IV for quick action and restoration of normal COQ10 levels in the body.
          </p>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">How to Get Started</h3>
          <ol className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">1</span><span className="text-gray-700">Contact us via calls or on WhatsApp</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">2</span><span className="text-gray-700">Speak with any of our medical representatives</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">3</span><span className="text-gray-700">Provide your past medical reports and any other relevant medical history</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">4</span><span className="text-gray-700">Fix an appointment date and confirm with our reps</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">5</span><span className="text-gray-700">Visit our centers on your appointment date. It's advisable to avoid coffee before coming to appointments</span></li>
            <li className="flex items-start gap-3"><span className="bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold shrink-0">6</span><span className="text-gray-700">Consult with our doctors to plan your recovery and understand the expectations of your treatment</span></li>
          </ol>
        </section>
      </div>
    ),
  },
  {
    id: 'hormone-systemic-therapy',
    title: 'Hormone Systemic Therapy',
    subtitle: 'Comprehensive hormone balance and replacement therapy',
    icon: FlaskConical,
    iconImage: '/service icons/Hormone Systemic Therapy.png',
    heroImage: '/hero-hormone.png',
    description: 'Expert hormone screening, profiling, and Bioidentical Hormone Replacement Therapy (BHRT) for men and women.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Systemic Therapy</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormones are chemical substances produced by special glands in your body and released directly into the bloodstream. Small amounts of hormones are enough to produce significant effects on body systems and processes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These hormones play an important role in the control of metabolism and growth. Hormones are also influential in the maintenance of sexual health. The levels of certain hormones are constantly fluctuating and can be affected by conditions such as stress and aging.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Hormone imbalances can occur when too much or too little hormones are produced. Tiny imbalances in hormone levels in the blood can result in various changes in normal body processes.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Causes of Hormone Imbalance</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Several factors can cause different kinds of hormone imbalances in men and women. The causes of hormone imbalance depend on whether the person is male or female, the hormones affected and the glands that cause the imbalance.</p>
          <p className="text-gray-700 leading-relaxed mb-4">General causes of hormone imbalance to everyone include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Several medications</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Tumors</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Stress</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Injuries</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Treatments, such as chemotherapy</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">In addition to these, hormone imbalance can also be caused by conditions and diseases that are specific to men and women. Puberty, pregnancy, and menopause can cause a surge or drop in hormones in women and are associated with hormone imbalance in women.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Hormone Imbalance in Women</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormones are essential in every woman's life and imbalance can affect their overall health and well-being. Female hormones such as estrogen and progesterone start to rise during puberty and control the menstrual cycle in women. The levels of estrogen and progesterone fluctuate during the cycle and cause the changes seen during ovulation and menstruation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Other hormones such as prolactin and oxytocin are produced more in pregnant women and breastfeeding mothers. Prolactin stimulates milk production while oxytocin causes milk release. Oxytocin is also important during labor and childbirth.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormonal imbalance in women can also be caused by several factors such as stress, diabetes, thyroid diseases, and medications such as contraceptives. Hormonal imbalance is a serious concern in women and can cause irregular menstrual cycles, heavy periods, infertility, and diseases such as endometriosis.
          </p>
          <p className="text-gray-700 leading-relaxed">Menopause is another cause of hormonal imbalance in older women. Menopause is normal, happens in every woman, and is a phase when the reproductive cycle of a woman comes to a halt.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Hormone Imbalance in Men</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Male hormones such as testosterone also rise in puberty and contribute to the growth changes seen in teenage boys. Testosterone and growth hormones start to fall from age 40 and become extremely low at age 80.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aging is a normal process that causes a decline in male hormones. In addition to aging, genetics, stress, injuries, medications, poor exercise and nutrition can also cause hormonal imbalance in males.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">It is more common for men to experience imbalances in testosterone compared to other hormones. When testosterone levels drop in males, it can cause "male menopause" which can result in low sex drive, stamina, and reduced strength for physical activities.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Hormonal imbalance in men can present in several ways including:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Muscle loss:</strong> Testosterone increases muscle growth, especially in people who exercise regularly. A reduction in testosterone can cause a loss of muscle mass in men.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Reduced sex drive</strong> - Low testosterone levels can cause reduced sex drive in men. High estrogen levels can also cause this reduced sex drive in men with hormonal imbalances.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Erectile dysfunction</strong> - Low levels of testosterone can make it difficult for men to maintain an erection during sex. Although this happens normally as men grow older, stress, lack of sleep, heart disease, and depression can also cause erectile dysfunction in young people.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Gynecomastia</strong> - Gynecomastia is the abnormal appearance of breasts caused by abnormally high estrogen levels in men. Although gynecomastia is not a disease condition, it can affect the self-esteem of young boys.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Mental Changes</strong> - Low testosterone levels can also cause mood swings, anxiety, and depression.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Stress and Hormone Imbalance</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today's world, stress is almost unavoidable. From long hours in traffic to long queues at the gas station to unhealthy work behavior, stress is everywhere. The body can adjust to various levels of stress by producing stress hormones, such as cortisol and adrenaline.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            These stress hormones cause changes in body physiology to adapt to stress. Changes such as an increase in blood sugar helps to provide energy to handle stressful activities. The problem arises when consistent levels of stress result in high levels of these stress hormones being maintained in the body.
          </p>
          <p className="text-gray-700 leading-relaxed">Chronic stress, especially in corporate workers can result in excessive weight gain, high blood sugar, high blood pressure, thyroid problems, and a higher risk of infection.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Screening for Hormone Imbalance</h3>
          <p className="text-gray-700 leading-relaxed mb-4">The first step in the screening of hormonal imbalances is the early identification of symptoms. The appearance of these symptoms can help paint a picture of the hormones that are being secreted, either too much or too little. Early non-specific symptoms seen in most hormone imbalances include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Weight gain or loss</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Muscle and joint pain</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Irregular menstrual cycles</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Insomnia</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Heat and cold intolerance</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Mood changes and depression</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reduced libido</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Fertility issues</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Screening tests commonly employed include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hormone saliva test</strong> - Can be used to check the level of hormones (such as estrogen and testosterone) in the saliva</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Full hormone profile</strong> - A rise or fall in hormone levels can be checked by a blood test. At Montis, we provide full hormone profile screening to check the levels of several hormones in the blood.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Thyroid function test</strong> - A thyroid function test checks the level of the thyroid hormones, TSH, T3, and T4 to screen for thyroid diseases.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Estrogen test</strong> - This test can be used to measure estrogen levels at different phases in the menstrual cycle. It is also an important fertility test.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Progesterone test</strong> - Used to monitor progesterone levels, especially during pregnancy.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Cortisol test</strong> - To measure the level of cortisol in response to stress</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Testosterone test</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>DNA genomic tests</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Bio resonance scan</strong> at our centre can check most of your hormone organs (completely radiation free)</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Here we do have customized men and women premium screening covering all the parameters of the hormones at a special rate customized by our panel of international medical team.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">How Hormone Imbalance can affect Fertility</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our approach to hormone begins with cleansing (why detox helps to build up some hormones, liver relate to hormone). Concept of managing hormones in a drug free methodology.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hormones play an important role in reproduction, and imbalances can result in infertility. The female hormones FSH, LH, estrogen, and progesterone are all essential in the maintenance of healthy menstrual cycles. Progesterone also plays a major role in the maintenance of pregnancy. The male hormone testosterone promotes sperm production and vitality.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            An imbalance in any of these reproductive hormones can affect fertility greatly. Although a decline in hormone production is a common occurrence with aging, hormonal imbalance can also be caused by several conditions such as polycystic ovary disease (PCOS). These conditions can make getting pregnant quite difficult and affect couples.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To manage fertility caused by hormone insufficiencies, artificial hormone supplements can be administered. Bioidentical hormones replacement therapy (BHRT) uses processed hormones gotten from plants to replace natural body hormones. BHRT supplements can be employed in the management of menopause and perimenopause.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'inflammation-root-cause',
    title: 'Inflammation & Root Cause',
    subtitle: 'Identify and manage chronic inflammation at its source',
    icon: Flame,
    iconImage: '/service icons/Inflammation & Root Cause.png',
    heroImage: '/hero-inflammation.png',
    description: 'Comprehensive inflammation screening and management therapies including antioxidant therapy, oxygen therapy, and colon hydrotherapy.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Inflammation and Root Cause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inflammation can be described as one of the various processes by which your body's immune system identifies harmful foreign agents and attempts to remove them. Inflammation is one of the several defense mechanisms to prevent intrusion from foreign agents such as bacteria, parasites, viruses, and even physical irritants.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inflammation needs to be well-regulated so that it can function optimally, and prevent the body from attacking its own tissues. When the body attacks its own cells, tissues, and organs, it can lead to autoimmune diseases, such as lupus. When the body is unable to respond effectively to harmful pathogens, it can result in immunodeficiencies, such as HIV/AIDS.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Inflammation also contributes to chronic diseases such as heart disease and diabetes. These diseases produce various markers, such as C-reactive protein (CRP) that can be used for diagnosis. At our clinics, we offer various solutions that can help control inflammation, as it is effective in the treatment of chronic conditions.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Inflammation Types</h3>
          <p className="text-gray-700 leading-relaxed mb-4">To understand inflammation properly, we need to first understand the two types of inflammation. The two types of inflammation are acute and chronic inflammation, depending on the immune cells involved.</p>
          
          <h4 className="text-xl font-semibold text-green mb-3">Acute Inflammation</h4>
          <p className="text-gray-700 leading-relaxed mb-4">Acute inflammation refers to the type of inflammation that is activated immediately in response to an injury or illness. Acute inflammation has a short duration lasting only a few days, and is characterized by five cardinal signs:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Swelling</strong> - Swelling develops when fluid builds up at the site of inflammation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Pain</strong> - Pain in the affected area is very common.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heat</strong> - Inflammation causes the area affected to be hot to touch.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Redness</strong> - Increased blood supply also causes the area to look red.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Loss of function</strong></span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Sometimes, acute inflammation can present without hidden symptoms. When acute inflammation lasts longer than expected, it becomes a subacute inflammation that can last up to 6 weeks.</p>

          <h4 className="text-xl font-semibold text-green mb-3">Chronic Inflammation</h4>
          <p className="text-gray-700 leading-relaxed mb-4">Chronic inflammation is activated later and persists even when the cause of the inflammation has stopped. Chronic inflammation has a longer duration and can last for up to months or years. Chronic inflammation can also cause certain symptoms such as:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Joint stiffness and pain</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Persistent fever</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Fatigue</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Fever</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Chronic inflammation can persist and is linked with various diseases such as heart disease, diabetes, arthritis, pulmonary diseases, and skin rashes. The persistence of chronic inflammation is often seen in individuals with hypersensitivity and autoimmune disorders, and those exposed to irritants.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Monitoring Inflammation while addressing the Root Cause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Inflammation in the body can be monitored by measuring the level of inflammatory markers in the body. Most of these markers only show that there is inflammation in the body without specifying where the inflammation is happening. A blood test can normally check for the following:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>C-reactive protein (CRP)</strong> - CRP is normally produced by the liver during inflammation. CRP levels in the blood rise greatly during inflammation but it does not specify what type of inflammation is occurring.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Erythrocyte sedimentation rate (ESR)</strong> - ESR can be described as the speed at which red blood cells settle in a thin tube. ESR rises during inflammation but it can't tell the specific type of inflammation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Serum electrophoresis</strong> - Serum electrophoresis can be used to measure the levels of proteins in the blood. This test can be used to measure the level of specific proteins elevated in various forms of inflammation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Imaging tests</strong> - such as X-rays, CT, and MRI scans. Imaging scans can visualize the effects of inflammation on body organs.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Dried layer test</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>HRV (Heart rate variability analysis)</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Live Blood Analysis</strong></span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Inflammation and Disease</h3>
          
          <h4 className="text-xl font-semibold text-green mb-3">Inflammation and Heart Disease</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the greatest dangers of inflammation is its contributing role to diseases. Inflammation starts as a body defense mechanism that is meant to be terminated when the trigger has been removed. When inflammation persists or is activated wrongly, it can damage body cells, and result in inflammatory conditions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chronic inflammation is implicated in many cardiovascular conditions, including atherosclerosis. In atherosclerosis, fatty cholesterol plaques are deposited on the walls of arteries that block arteries. Damage to the walls of the arteries activates inflammation in these arteries resulting in total blockage of the arteries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">Atherosclerosis can cause heart attacks and myocardial infarctions. The plaques can also break away from the walls to travel to other organs, such as the brain. When this happens, it can result in a stroke. The influence of inflammation in heart diseases can be confirmed in the control of inflammatory risk factors (such as bad cholesterol and smoking) reducing the risk of heart diseases.</p>

          <h4 className="text-xl font-semibold text-green mb-3">Inflammation and Diabetes</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Recent researches also point to the influence of inflammation in both type 1 and type 2 diabetes. Type 1 diabetes is an autoimmune condition where the immune system attacks insulin-producing cells in the pancreas. Continuous attack and destruction of these cells will eventually result in insulin deficiency and high blood sugar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In type 2 diabetes, the mechanism of inflammation is quite different. Risk factors such as obesity cause an accumulation of fat in the body. This accumulated fat produces pro-inflammatory chemicals (such as cytokines) that affect fat tissue. Inflammation in type 2 diabetes results in the development of insulin resistance that alters insulin action.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">Adjustment to an anti-inflammatory lifestyle is often recommended in the management of diabetes. It can normally incorporate increased physical activity, regular exercise, and diet changes that include food with natural anti-inflammatory actions.</p>

          <h4 className="text-xl font-semibold text-green mb-3">Inflammation and Cancer</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inflammation also plays a major role in the development of most cancers. In fact, inflammation is often considered a hallmark of cancer and is linked with the development and maintenance of most cancers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Inflammation has been seen to promote all stages of cancer and tumor development. Inflammatory cells and cancer cells interact with each other to form a tumor microenvironment (TME). Pro-inflammatory cells and processes block anti-tumor activity in the TME and permit the sustained growth of cancer.
          </p>
          <p className="text-gray-700 leading-relaxed">Inflammation also generates large quantities of oxidants such as reactive oxygen species (ROS). Sustained generation of ROS in chronic inflammation can cause DNA damage in affected cells. Continuous DNA damage results in cell mutation which can be passed down to new cells during cellular replication.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Management of Inflammation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Normal, controlled inflammation does not require treatment. After a few hours or days, acute inflammation passes, and normal body function is restored. When inflammation is chronic and unrelenting, that is when it can become a problem.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Management of inflammation is targeted at either preventing inflammation totally or bringing it down before it causes damage. You can prevent inflammation by adopting a healthy lifestyle which should normally include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reduction in alcohol consumption and quitting smoking (totally).</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Increased physical activity and exercising.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Cutting out pro-inflammatory food (such as sugar, meat, bad fats, and fried foods) from your diet.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Adopting our dedicated nutritional anti-inflammatory diet.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Stress management.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Existing inflammation can also be treated by therapies and medications. Here we provide several solutions for the treatment of inflammation after the primary diagnosis, which includes:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Antioxidant Therapy</strong> - These can reduce inflammation by breaking down oxidants.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vitamin D and COQ10 therapy</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon hydrotherapy</strong> - to clear out toxins in the colon.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxygen therapy</strong> - This therapy can activate antioxidant systems in the body to reduce inflammation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hypoxia Therapy</strong> - to improve the mitochondrial function and provide more oxygenation into the cells directly.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">We do provide pre and post clinical screening to determine the results for every client.</p>
        </section>
      </div>
    ),
  },
  {
    id: 'men-up-program',
    title: 'Men Up Program',
    subtitle: 'Comprehensive men vitality and wellness program',
    icon: User,
    iconImage: '/service icons/Men Up Program.png',
    heroImage: '/hero-men-up.png',
    description: 'Specialized men vitality program addressing erectile dysfunction, hormone imbalance, and sexual health through natural and therapeutic approaches.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Men Vitality Program</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            One common misconception is that vitality only relates to sexual performance. In fact, vitality involves more than sexual stamina and includes the overall health and well-being of men. In recent years, vitality has been greatly affected by cigarettes, alcohol, and meat.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sexual health still represents a core aspect of every man's life. Vitality reduces with aging and it is common for men to struggle with maintaining an active and enjoyable sex life that is vital for overall health and well-being in adult males.
          </p>
          <p className="text-gray-700 leading-relaxed">Natural approaches to improve male vitality include diet modification - reducing meat, increasing exercise, and eliminating alcohol intake and smoking. Multiple medications and programs are also available that are aimed at improving vitality in men.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Factors affecting Men's Vitality</h3>
          <p className="text-gray-700 leading-relaxed mb-4">A positive approach to improving vitality starts with being familiar with factors that can affect vitality, and health decisions that can improve vitality. Men's vitality can be influenced by a variety of factors, including lifestyle choices, genetics, and environmental factors.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Aging is a normal natural process that causes a decline in vitality in men. Aging is associated with a drop in testosterone - an essential male sex hormone, and a fall from that peak seen in youth. In addition to aging, factors that can also affect men's vitality include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Regular Exercising</strong> - Exercises and increased physical activity are both essential to keep fit and improving your vitality. A sedentary lifestyle promotes weight gain and increases the risk of chronic diseases, such as hypertension and diabetes. Men who exercise regularly are less likely to have erectile dysfunction, experience better sex, and have an overall healthier lifestyle.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Quit Smoking</strong> - Smoking is a single activity that is heavily linked to health conditions. Smoking increases the likelihood of erectile dysfunction and can cause damage to sperm. Although smoking is addicting and can be challenging to quit, stopping smoking today can greatly improve your vitality, as well as make you healthier.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Alcohol Consumption</strong> - Alcohol drinking is almost as bad as smoking. Unlike smoking, low to moderate alcohol drinking is beneficial to heart health while heavy drinking is associated with several diseases. Heavy drinking can cause erectile dysfunction, and infertility, and influence negative sexual behavior (such as unprotected sex).</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Mental Illness</strong> - Mental illnesses, such as depression can negatively affect a man's libido. A loss of libido can make erections difficult to get and impair a man's vitality. Mental health should not be overlooked, as an illness of the mind can have several physical manifestations.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Medications</strong> - Drugs used to treat chronic conditions such as hypertension, diabetes, and ulcers can cause side effects that negatively affect vitality. Medications used to treat depression (anti-depressants), and other mental illnesses can also cause erectile dysfunction in patients.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Vitality starts to peak in a man's youthful years and declines as he grows older. Younger men that aim to maintain levels of vitality should be fully aware of these factors. Cutting alcohol use, quitting smoking, taking care of your mental health, and maintaining regular exercise can increase vitality, even into your older years.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What is Erectile Dysfunction?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Erectile dysfunction (ED) can be defined as the inability to get an erection and maintain it enough for sexual intercourse. Erectile dysfunction is also called impotence and can be occasional or frequent.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Occasional erectile dysfunction occurs more commonly in people and may be due to stress or any other lifestyle effects, while frequent erectile dysfunction is associated with more serious mental and physical health issues.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Although ED is more common in older people due to a loss of vitality, it is still a problem for young men. A recent study in 2013 showed that up to 25% of men who seek solutions for erectile dysfunction for the first time were younger than 40.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Most times, ED is a symptom of a greater health concern or an indication of lifestyle habits. Erectile dysfunction can be confirmed when any of these three symptoms are persistent:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reduced libido</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Problems getting an erection</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Problems maintaining an erection</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Erectile can present with any of these three symptoms and can become a problem when it constantly affects normal sex life.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Erectile Dysfunction Causes</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Erection is an essential process in sexual intercourse which involves complex interactions between the brain, nerves, blood vessels, hormones, and even emotions. Erectile dysfunction can arise when there is a problem with any of these that causes an inability to get and maintain erections.</p>
          <p className="text-gray-700 leading-relaxed mb-4">The causes of erectile dysfunction can either be Vasculargenic, Neurogenic, or Psychogenic:</p>
          
          <h4 className="text-xl font-semibold text-green mb-3">Vasculogenic causes</h4>
          <p className="text-gray-700 leading-relaxed mb-4">Erectile dysfunction can be caused by a dysfunction of the normal blood circulation to the penis. Common vasculogenic causes include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">High blood pressure</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">High blood cholesterol</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Obesity</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Atherosclerosis</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Diabetes</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Metabolic syndrome</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Smoking</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Heavy alcohol consumption</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Medications - such as medications used to treat depression</span></li>
          </ul>

          <h4 className="text-xl font-semibold text-green mb-3">Neurogenic causes</h4>
          <p className="text-gray-700 leading-relaxed mb-4">ED can also be caused by a dysfunction in the nervous control of erection. Common neurogenic causes include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Nerve injuries</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Spinal cord injuries</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Multiple sclerosis</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Parkinson's disease</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Epilepsy</span></li>
          </ul>

          <h4 className="text-xl font-semibold text-green mb-3">Psychogenic causes</h4>
          <p className="text-gray-700 leading-relaxed mb-4">Psychological issues can also affect the brain's ability to trigger the processes necessary to start and maintain an erection. Psychogenic causes include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Stress</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Mental health conditions - such as depression and anxiety</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Insomnia</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Relationship issues</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Treatment for Erectile Dysfunction</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Erectile dysfunction is a growing concern for men, both young and old. ED is associated with certain risk factors that can be modifiable or non-modifiable. Age, for example, is a non-modifiable risk factor that will affect the development and maintenance of erections in men.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Apart from age, poor lifestyle habits can also cause ED in young men. Risk factors include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Chronic diseases</strong> - such as diabetes and atherosclerosis.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Smoking</strong> - Chemicals in cigarettes can obstruct the blood vessels involved in erection. Consistent tobacco use leads to erectile dysfunction.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Obesity</strong> - Being overweight or obese can cause erectile dysfunction</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Chronic alcohol and drug use</strong></span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">For young men that want to maintain a high level of sexual vitality, proper management of these risk factors can aid prevent erectile dysfunction.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Erectile dysfunction can also be treated using medications and therapies. At our clinics, we provide consultations and treatment to persons affected by erectile dysfunction. Our therapies available include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Angio Therapy</strong> - Our Angio therapy improves blood circulation to the lower parts of the body, including the erectile tissues and help by opening up the vessels that has no or very low circulation.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxygen treatment</strong> - This treatment is aimed at improving the oxygen content of the blood.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>IV Therapy</strong> - Brings down inflammation that can cause chronic disease, and improve body circulation. Good circulation is essential for healthy, sustained erections.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Targeted Cellular Therapy</strong> - Aimed at reducing the effects of aging on men's vitality</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hypoxia Therapy</strong> - Intermittent hypoxia therapy involves training and exercise in hypoxic environments (areas with low oxygen). The goal is to increase respiratory efficiency to increase endurance, strength, and overall energy in normal environments. Hypoxic training can help improve strength and vitality in aging men.</span></li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    id: 'menopause-perimenopause',
    title: 'Menopause & Perimenopause',
    subtitle: 'Specialized care for women transitioning through menopause',
    icon: UserCog,
    iconImage: '/service icons/Menopause & Perimenopause.png',
    heroImage: '/hero-menopause.png',
    description: 'Comprehensive menopause and perimenopause management including hormone replacement therapy, cellular therapy, and symptom relief.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Menopause and Perimenopause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Menopause marks the end of a woman's regular menstrual cycle. In most women, menopause starts around 45 to 55 years. At menopause, the level of the female hormones drops too low levels and this signifies the end of reproduction in women.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Perimenopause, on the other hand, refers to the phase just before the beginning of menopause. Perimenopause is a phase in a woman's life which marks the gradual transition to menopause. This phase can usually begin around the mid-40s, eight to 10 years before the start of menopause.
          </p>
          <p className="text-gray-700 leading-relaxed">Menopause and perimenopause both have similar symptoms that can affect the general health of women affected. Symptoms of menopause and perimenopause include irregular periods, regular mood swings, hot flashes, and trouble sleeping.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">When do menopause and perimenopause start?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Normal menopause is described as a phase when female hormone levels fall drastically which usually occurs between ages 45 and 55. Menopause in older women is confirmed on the day when they complete 12 consecutive months, a full year without seeing their period.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Menopause can also start earlier in younger persons when these hormones reduce even before they grow old. This type of menopause is known as early or premature menopause. Some factors that can cause premature menopause include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Surgeries</strong> - Such as oophorectomy (removal of the ovaries), and hysterectomy (removal of the uterus)</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Autoimmune diseases (such as Lupus)</strong> - These diseases can cause premature ovarian failure in young women.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hormonal imbalance</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Chemotherapy</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Radiation therapy</strong></span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">On the other hand, perimenopause is that phase when female hormones are still dropping but are not as low as in menopause. Perimenopause can start as early as 10 years before menopause starts, and continue till the start of menopause.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Symptoms of Menopause and Perimenopause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">The symptoms of menopause and perimenopause are similar in most people and usually uncomfortable. A decline in estrogen and a rise in FSH due to aging, and other conditions are the main causes of these symptoms seen in menopause and perimenopause.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Menopausal can have a huge impact on a woman's personal life, work, social life, and relationship with people around them, including their families.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Perimenopause symptoms can start as early as 10 years before menopause. As estrogen declines in perimenopause, it can result in hormonal imbalances that can affect the production of progesterone. These fluctuations can continue for a few months or years until menopause.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Common symptoms at perimenopause and menopause include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Irregular menstrual cycles</strong> - Irregular cycles are usually one of the earliest signs of perimenopause. Hormonal fluctuations cause periods to become irregular and unpredictable during perimenopause</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Heavy periods</strong> - In perimenopause, when the periods appear, they can be heavier than normal.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vaginal dryness</strong> - The decline in female hormones can cause a loss of normal vaginal lubrication. Vaginal dryness can make sex to be painful.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Loss of libido</strong> - As sex becomes more uncomfortable due to vaginal dryness, it is common to see a loss of libido during menopause.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hot flushes</strong> - The skin can feel warm all of a sudden and spread across the body. Hot flushes occur very commonly during perimenopause and menopause.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Problems with sleep</strong> - Night sweats can become more common which can make sleeping uncomfortable.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Mood swings and irritability</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Increased occurrence of headaches and migraines</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Frequent urinary tract infections</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">It is important to be able to differentiate normal menopausal symptoms from disorders. Bleeding that becomes too heavy can be a sign of infections, fibroids, endometriosis, and even hormonal imbalances.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Screening for Menopause and Perimenopause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Screening at perimenopause is essential to make sure the symptoms experienced are truly caused by perimenopause and not another condition. It is not absolutely necessary to see a doctor to diagnose yourself with perimenopause and menopause. Once you notice the symptoms, you can visit any of centers around you to see a health professional.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Certain symptoms can warrant you to check with your healthcare provider sooner. These symptoms can indicate irregularities in normal perimenopause, such as bleeding during sex, vaginal spotting, and psychological changes that can affect daily living.</p>
          <p className="text-gray-700 leading-relaxed mb-4">If any of these symptoms become more concerning, it can become important to consult with your doctor to recommend hormone tests. Hormone tests can detect the level of FSH, thyroid hormones, and estrogen to check for hormone imbalance:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Over-the-counter test kits for FSH are available for use at home. These test kits can check for increased FSH levels seen in menopause or perimenopause.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Thyroid function tests can also be recommended to monitor the level of thyroid hormones.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Screening tests are also commonly recommended when perimenopause symptoms appear in younger persons. These tests can help determine the root cause (in case it is hormone imbalance or another condition such as endometriosis) and plan treatment.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Treatment of Menopause and Perimenopause</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Menopause is normal and usually does not require any form of treatment. Treatment of menopause is focused on alleviating symptoms and preventing conditions from affecting daily living.</p>
          <p className="text-gray-700 leading-relaxed mb-4">The National Institute of Health emphasizes the need to manage perimenopausal and menopausal symptoms by trying to use a single plan to treat multiple symptoms. Treatment options include medications, lifestyle changes and home remedies to readjust to changes at menopause:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hormone Replacement Therapy</strong> - Estrogen replacement therapy is recommended to treat symptoms of menopause, such as hot flashes. Estrogen therapy should be carefully monitored by your doctor to prevent side effects.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vaginal Estrogen</strong> - Vaginal estrogen is available as tablets and topical creams to relieve vaginal dryness.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Antidepressants</strong> - Antidepressants, especially SSRIs can also be administered to treat mood changes and depression caused by menopause.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Vitamin supplements</strong> - Vitamin D supplements can be given to treat osteoporosis (weak bones) caused by menopause. Vitamin drips are also available at Montis to treat menopause.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Cellular therapy</strong> - Cellular therapy is available at Montis to improve the symptoms of menopause.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Clonidine patches</strong> - Clonidine patches are also recommended to provide relief from hot flushes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Improved sleep</strong> - Avoiding alcohol, caffeine, and other things that make sleep hard is essential to improve rest.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Readjustment to diet to include more fruits and vegetables.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">The treatment of perimenopause symptoms is almost the same as menopause. Treatment is directed at relieving symptoms and preventing early menopause.</p>
        </section>
      </div>
    ),
  },
  {
    id: 'digestive-health',
    title: 'Montis Digestive Health',
    subtitle: 'Comprehensive gut health and digestive wellness solutions',
    icon: Apple,
    iconImage: '/service icons/Montis Digestive Health.png',
    heroImage: '/hero-digestive.png',
    description: 'Advanced digestive disease screening, colon hydrotherapy, detox programs, and our patented Gut+ Probiotic formulation.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Digestive Health</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The digestive system is a long digestive tract that starts at the mouth and ends at the anus. This system is involved in the breakdown of complex food materials into smaller units that can then be absorbed into the bloodstream. The activities of the digestive system, the "gut" are essential for the healthy functioning of the human body.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The complexity of the digestive tract and its activities can leave the gut exposed to infectious diseases, toxins, and other toxic substances that can adversely affect digestive health.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Digestive diseases can also be caused by internal derangements such as genetic factors and autoimmune attacks on the digestive organs.
          </p>
          <p className="text-gray-700 leading-relaxed">A healthy gut environment is also maintained by specific bacteria and microorganisms present in the gut. Diet and lifestyle factors such as stress, alcohol intake, and medications can kill gut bacteria and result in a disruption of the normal gut environment.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Digestive Diseases</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Digestive diseases can affect any part of the digestive system including the stomach, intestines, anus, and even the liver. Digestive diseases can either be infectious or non-infectious.</p>
          <p className="text-gray-700 leading-relaxed mb-4">When a disease is infectious, it means it can easily spread from one person to another and can cause community outbreaks. Infectious diseases can be caused by viruses, bacteria, fungi, or parasites.</p>
          <p className="text-gray-700 leading-relaxed mb-4">On the other hand, non-infectious diseases cannot be spread from one person to another. Non-infectious diseases are caused by poisons, toxins, and even when the immune system attacks the digestive system.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Non-infectious digestive diseases can also be functional gastrointestinal diseases associated with dysfunctional motility, altered gut flora, gut hypersensitivity, dysfunctional mucosal functional, altered central nervous system control, or a combination of any of these.</p>
          <p className="text-gray-700 leading-relaxed">In 2021, a study was carried out by the Rome Foundational Global Study which revealed a global prevalence of functional gastrointestinal diseases of about 40%. This study shows a need to maintain a stable gut microflora for good digestive health, and optimal overall health.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Screening for Digestive Diseases</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Just like other diseases, comprehensive screening for digestive diseases starts with taking a medical history, checking for symptoms, and physical examination of patients. A comprehensive screening plan is recommended by your medical team and is essential to narrow down the cause of the disease to begin treatment early.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Diarrhea and abdominal discomfort are often seen in almost every digestive disease. They are what you see that tells you to seek treatment. The type of diarrheal stool is often used by doctors to tell the cause of the disease. For example, in salmonella, the stool usually has a strong smell and may contain blood, while the stool in cholera looks like rice water.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Common symptoms caused by most digestive diseases include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Diarrhea - may be bloody or non-bloody</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Nausea</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Vomiting</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Abdominal pain and discomfort</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Early intervention is essential to control symptoms and prevent severe disease. Severe symptoms in digestive diseases include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Bloody diarrhea</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">High-grade fever</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Bloody vomiting</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Severe dehydration</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">At Montis, we provide comprehensive screening panels that can narrow down the specific cause of your digestive issues. Comprehensive and Advance Gut screening usually contains tests used in the screening of digestive diseases which may include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Fecal occult blood test</strong> - Used to check for blood in the stool.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Stool culture</strong> - Culture tests are used to check for bacteria in the stool.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Urea Breath test</strong> - Test for Helicobacter pylori, the bacteria that causes stomach ulcers</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colonoscopy</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Electromagnetic Resonance Scan (BR) scans</strong></span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>DLBE test</strong> (Inflammation in the stomach and colon)</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Treating Gut Illnesses</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Untreated diarrhea and vomiting can result in excessive fluid loss and shock. Some pathogens can also produce toxins that can spread to other sites to cause disease. The treatment of digestive diseases is focused on improving disease symptoms, and preventing severe disease.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Fluid replacement and treatment of diarrhea and vomiting are part of the earliest interventions to treat digestive diseases. Oral rehydration therapy with zinc is always recommended to replace fluids lost from diarrhea. Loperamide (Imodium) is an effective anti-diarrheal that is often prescribed to control diarrhea.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Following tests to diagnose the specific cause of the disease, targeted therapy can then start to treat the disease. Antibiotics can be prescribed to treat bacterial diseases, antivirals to treat viral while antiparasitic drugs can be used to treat diseases caused by parasites. At Montis we also provide modern treatment options such as:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon hydrotherapy</strong> - Colon hydrotherapy helps to clear bad bacteria out of the gut to enable good gut bacteria to grow. The process forces cleansing water into the colon through the rectum to flush out colon contents.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Coffee enemas</strong> - Coffee enemas are another form of colon hydrotherapy where coffee is used. In this procedure, brewed coffee is passed into the colon through the colon to clean the colon</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Detox drips</strong> - Detox drips are also helpful to detoxify the blood. Detox drips can contain detox cocktails mixed with vitamins and minerals as a supplement</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Gut Plus</strong> - Probiotics refer to healthy bacteria that are residents of the gut. Gut plus help to maintain healthy gut flora and prevent the growth of bad bacteria that can cause disease. Certain foods also contain probiotics, such as yogurts to restore the normal gut flora. Probiotic supplements are also available that can help improve the probiotics population in the gut.</span></li>
          </ul>
        </section>

        <section className="bg-[#F6F6F2] p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-green mb-4">Gut+ Probiotic (Patented formulation)</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The gut is a host to trillions of bacteria - both good and bad. Keeping a constant gut flora population has been proven to be effective in the prevention of digestive diseases, and the maintenance of a healthy gut.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our probiotic supplement, Gut+ probiotic, is loaded with over 20 billion colony-forming units (CFU) of the bacteria, Pylopass. Pylopass is a patented strain of Lactobacillus reuteri from Denmark that has been proven to reduce the bacterial load of Helicobacter pylori in the gut. In turn, it can prevent gastrointestinal symptoms related to H. pylori infection such as heartburn and acid reflux.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In 1994, the World Health Organization also labeled Helicobacter pylori as a class 1 carcinogen making it more concerning. Chronic Helicobacter pylori infection can cause metaplastic changes in the stomach which can progress to cancer.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pylopass in our Gut+ probiotic supplement offers a safe, non-invasive, non-pharmacological approach to prevent the colonization of the gut by H.pylori. The Pylopass strain in the Gut+ probiotic is designed to target H. pylori without disturbing the normal gut flora.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: 'revitalization-healthy-aging',
    title: 'Revitalization & Healthy Aging',
    subtitle: 'Anti-aging therapies and revitalization programs',
    icon: Sparkles,
    iconImage: '/service icons/Revitalization & Healthy Aging.png',
    heroImage: '/hero-revitalization.png',
    description: 'Stem cell therapy, beauty IV therapy, immune system therapy, and comprehensive anti-aging programs for optimal vitality.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Montis Revitalization and Healthy Aging</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aging is a normal, continuous process in every living thing that results in the gradual decline of many body functions. Aging does not start or end at a particular age but happens gradually from birth till death.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As a person ages, it exposes them to certain health conditions that can impair normal well-being. Conditions linked with older age include cataracts, back pain, osteoarthritis, pulmonary diseases, hearing loss, depression, and even dementia.
          </p>
          <p className="text-gray-700 leading-relaxed">To minimize the effects of aging, several kinds of anti-aging health programs are available today. These plans can come in the form of diet plans, pills, IV medications, and other anti-aging remedies aimed at revitalizing and reversing aging.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Healthy Aging Explained</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The World Health Organization (WHO) defines healthy aging as "the process of developing and maintaining the functional ability necessary for well-being in older age."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Older age increases the occurrence of certain health conditions known as geriatric syndromes. These conditions are associated with a steady decline in physical and mental capacity, resulting in an increased risk of disease, and eventually death.
          </p>
          <p className="text-gray-700 leading-relaxed">Aging should be healthy to maintain optimal living conditions. Although some of these conditions are linked with aging and underlying genetics, the majority of them are caused by the influence of their environments on their health.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Anti-aging Explained</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Anti-aging is a concept that has received multiple definitions from scientists, health professionals, aestheticians, and even beauty/fitness enthusiasts. Questions like, "what does anti-aging really mean?" "Is it possible to age backward?" "How can I age backward" are commonly asked by persons who seek the fountain of youth hidden in the science of anti-aging.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Scientific research on anti-aging is focused on finding solutions to either reverse or slow down aging in humans. Currently, there are no known medications or procedures that can slow down or reverse the natural process of aging which would happen to everyone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In comparison, medical research on anti-aging is focused on the prevention, detection, and treatment of chronic diseases associated with aging. The focus of anti-aging in the medical community is to promote healthy aging and prevent the early appearance of age-related diseases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            At Montis, we provide products and therapies that promote optimal health conditions for aging persons and keep them revitalized for their daily activities. Our programs help you to stay beautiful in and out, and age healthily.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">Therapies and programs dedicated to healthy aging and revitalization available include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Stem Cell Therapy</strong> - Stem cells are unique cells that can give rise to any kind of cell and tissue in the body, such as skin, hair, and muscle. Stem cell therapy uses stem cells (that may have been collected when the person was still younger) to replace damaged and old cells in the body.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Beauty IV Therapy</strong> - Our beauty IV Therapy are packed with antioxidants - Glutathione and Vitamin C, and Collagen Forte that keep your skin supple and smooth.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon Hydrotherapy</strong> - Our colon hydrotherapy clears toxins out of the colon, and effectively out of the body.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Immune System Therapy</strong> - Packed with powerful antioxidants, these drips help to boost immune system function and maintain optimal function.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oxygen Therapy</strong> - Our oxygen therapy increases oxygen content in the body to improve body metabolism.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Intermittent Hypoxia Therapy</strong> - Intermittent hypoxia therapy involves training and exercise in environments with low oxygen concentrations. Training in these hypoxic conditions improves endurance, strength, and overall energy. Hypoxic training should be done with caution and under the supervision of trained supervisors, especially with older persons.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Factors that can improve healthy aging</h3>
          <p className="text-gray-700 leading-relaxed mb-4">In young people that want to age in healthy conditions, early adoption of a healthy lifestyle is important to prevent the occurrence of geriatric conditions. Components of a healthy lifestyle include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Regular exercising</strong> - Maintaining a physically active lifestyle plays a major role in the prevention of chronic diseases, including diabetes and atherosclerosis. As you grow older, exercise should be more guided by trained professionals to plan proper exercise plans, and prevent harm during exercises.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Healthy diet</strong> - Keeping a healthy diet is essential for maintaining a healthy weight. A healthy diet normally contains fewer calories and can include foods that are packed with nutrients. Whole grains, healthy fat, fruits, and vegetables are great diet choices that should be included in the diet. Refined sugars, soda, and alcohol should be reduced or removed, especially as a person grows older.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Maintaining a healthy weight</strong> - Certain health conditions are associated with being obese/overweight, as well as being as underweight. A healthy diet combined with lifestyle adjustments and more physical activity is recommended to maintain a healthy weight.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Quitting smoking</strong> - Smoking is implicated in multiple health conditions, including heart disease and cancers. Quitting smoking totally is one of the single most important things for your health as you grow older.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Increased participation in hobbies</strong> - As you get older, it is common to get preoccupied with the responsibilities of work and family. Getting involved with the hobbies and social activities you enjoy can increase happiness in older people to reinforce healthy living.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Regular Health Screening</strong> - Regular doctor visits help to screen for diseases, and detect them early. In men for example, as you get older, checking your prostrate regularly is important to catch prostate cancer early, and start treatment early.</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed">Although these tips cannot stop aging (no one really can), they are extremely helpful to prevent health conditions caused by aging. Revitalization starts with a commitment to positive lifestyle changes prior to the introduction of therapies and medications.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Benefits of Revitalization</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Aging is accompanied by a decline in health which results in a decline in vitality, a decline in sexual performance, hormonal imbalances, an increase in the risk of chronic diseases and neurodegenerative conditions, and a loss of the body's ability to clear toxins.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Revitalization is aimed at preventing the early advent of age-related disease to keep the youthful energy peaking. Multiple benefits can be gained from revitalization which improves general health and well-being. Some of the benefits you can gain from joining a revitalization program today include:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Restoration of vitality and sexual performance.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Increases energy to be able to complete daily tasks.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Reduces the effects of stress from daily activities</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Minimizes the risk of chronic diseases such as atherosclerosis and diabetes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Boost the immune system to be able to fight diseases</span></li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    id: 'slenderize-weight-loss',
    title: 'Slenderize for Weight Loss',
    subtitle: 'Effective weight management and metabolic optimization',
    icon: Scale,
    iconImage: '/service icons/Slenderize for Weight Loss.png',
    heroImage: '/hero-slenderize.png',
    description: 'Comprehensive weight loss programs including colon hydrotherapy, IV weight loss drips, hypoxia therapy, and customized hormone therapy.',
    content: (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Slenderize Your Way</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weight is one of the most talked about topics globally. Weight loss is recommended in the management of several diseases, including diabetes and heart disease. Weight loss should be carefully monitored by trained persons to achieve an optimal weight.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In health, weight is commonly measured as BMI which is a ratio of a person's weight to their height. A BMI that is considered overweight is labeled as a risk factor for obesity, diabetes, and heart disease
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Weight loss can be achieved by exercise, lifestyle, and diet changes as recommended by a health professional. Medications such as anti-inflammatory steroids can also be prescribed by doctors and added to weight loss plans.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">What is BMI?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Weight is a common term with tons of different definitions. In health, weight can be described by measuring the body mass index. Body mass index (BMI) can be defined as a common parameter employed by most health professionals to measure body weight.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Body mass index can be expressed as a person's weight in kilograms divided by the square of the height in meters. The ranges for BMI can be used to determine the level of body fatness of an individual:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">BMI less than 18.5 is considered underweight</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">BMI between 18.5 and 24.9 is normal or healthy</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">BMI between 25.0 and 29.9 is overweight</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">BMI higher than 30.0 is obese</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">BMI higher than 40.0 is severely obese</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">For easier estimation, BMI can also be calculated using BMI charts that match weight and height to their BMI. BMI is commonly measured with waist circumference as disease screening tools.</p>
         
          <p className="text-gray-700 leading-relaxed mb-4">Waist circumference is another screening test used to monitor body weight. Stores of abdominal fat can increase the risk of several diseases. Healthy ranges of waist circumference are different for men and women:</p>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>In men:</strong></p>
          <ul className="space-y-1 mb-4 ml-4">
            <li className="text-gray-700">* A waist circumference above 102cm is considered very high risk.</li>
            <li className="text-gray-700">* A waist circumference between 94cm and 102cm is considered high risk.</li>
            <li className="text-gray-700">* A circumference lower than 94cm is considered low risk.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-2"><strong>In women:</strong></p>
          <ul className="space-y-1 mb-4 ml-4">
            <li className="text-gray-700">* A waist circumference above 88cm is considered very high risk.</li>
            <li className="text-gray-700">* A waist circumference between 80cm and 88cm is considered high risk.</li>
            <li className="text-gray-700">* A circumference lower than 80cm is considered low risk.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">High BMI and waist circumference values are indicative of high body weight and are considered risk factors for certain diseases, such as diabetes and heart disease. These two parameters are not diagnostic tools, and a health assessment is required to confirm health conditions.</p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">BMI and Disease</h3>
          <p className="text-gray-700 leading-relaxed mb-4">A healthy BMI measures between 18.5 and 24.9. Maintaining a healthy BMI within this range is a common health recommendation to prevent obesity, and reduce the risk of non-communicable diseases including cancer, heart disease, and type 2 diabetes.</p>
          <p className="text-gray-700 leading-relaxed mb-4">The risk of type 2 diabetes is higher in persons who are overweight or obese, and lower in persons with a lower BMI. Several theories point to an increased release of pro-inflammatory cytokines by fat cells in these groups. These pro-inflammatory chemicals cause insulin resistance seen in type 2 diabetes.</p>
          <p className="text-gray-700 leading-relaxed mb-4">In heart disease, higher BMI results increase the risk of plaque deposition in blood vessels. When this happens, blood vessels can become clogged (atherosclerosis) and cause damage to the organs they supply. Atherosclerosis can cause angina, hypertension, coronary heart disease, arrhythmias, and even stroke.</p>
          <p className="text-gray-700 leading-relaxed mb-4">In summary, high BMI levels in the range of being overweight and/or obese can cause serious diseases including:</p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Type 2 diabetes</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Hypertension</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Coronary heart disease</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Stroke</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Dyslipidemia - Abnormally high levels of lipids</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Mental illness - Such as depression</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Increased risk of mortality</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700">Several kinds of cancer</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Weight Screening Tests</h3>
          <p className="text-gray-700 leading-relaxed mb-4">In this article, we have already discussed the use of body mass index and waist circumference to assess body weight. In addition, several tests are also available used to monitor weight and disease:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Skinfold measurement</strong> - Used to measure the thickness of fat in the skin and subcutaneous tissue.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Blood lipid panel</strong> - A lipid panel is used to measure the levels of good fats (HDL) and bad fats (such as LDL and triglycerides) in the blood</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Fasting/Random blood sugar test</strong> - Used to measure high blood sugar in diabetes</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Oral glucose tolerance test</strong> - Used to check for insulin response in patients with diabetes.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Liver function tests (LFTs)</strong> - LFTs are used to monitor liver function.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>DNA test</strong> - DNA testing can check for genes that can increase the risk of obesity.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Metabolism test</strong> - Such as direct and indirect calorimetry.</span></li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-green mb-4">Tips for Losing Weight</h3>
          <p className="text-gray-700 leading-relaxed mb-4">Before beginning your weight loss journey, it is important to remember that although a healthy weight is essential for healthy living, weight loss is not the solution to every health issue. If recommended by your health professional, weight loss should be focused on the long term to be sustainable.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Sustainable weight loss is aimed at maintaining a healthy weight that can improve your general health. Tips that can be employed to make weight loss effective include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Cut out carbohydrates</strong> - Carbohydrates have large calories and contribute greatly to weight gain. One of the best ways to lose weight is to reduce sugars and carbohydrates in your diet. Replacing refined carbohydrates with whole grains can aid to lower body mass index and weight. You should be careful when planning a low-carb diet to prevent excessive weight loss.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Add more protein, fat, and vegetables</strong> - A weight loss plan should also include more proteins, healthy fats, and vegetables. Proteins are great for health and help to restore muscle mass that could be lost when losing weight. Healthy fats such as olive oils, nuts, and seeds contain low levels of saturated fat that are great for health. Vegetables are rich in nutrients and fiber.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Do more exercise</strong> - In addition to diet adjustments, increasing physical activity is extremely helpful in weight loss. Exercise helps a lot to burn calories faster, and lose weight quicker. Gym culture is popular with everyone doing cardio and lifting weights. Exercising improves weight loss and is also linked with numerous health benefits</span></li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">Combining diet readjustments and increasing physical activity are proven methods to lose weight effectively. Here, we also provide therapies that can improve weight loss. Some of our therapies include:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Colon Hydrotherapy</strong> - Our colon hydrotherapy helps to flush out toxic build-up in the digestive system. This helps to improve digestive activity and increase body metabolism for weight loss</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Weight loss drips</strong> - IV therapy commonly contain a cocktail of vitamins, minerals, and other fat-burning chemicals (such as methionine inositol choline) that help to burn fat. Methionine inositol choline (MIC) works by targeting and breaking down fatty deposits in the body. MIC should be used with caution to prevent excessive weight loss. IV Therapy also contain B vitamins such as vitamin B1, B2, B3, and B12. B vitamins improve metabolism and are effective in weight loss.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Hypoxia Therapy</strong> - Hypoxic therapy puts the body in low oxygen conditions to improve endurance, boost energy, and break down excess fat. A recent study in 2021 also proved the effect of intermittent hypoxic-hyperoxic therapy (IHHT) to improve the lipid levels in patients with metabolic syndrome.</span></li>
            <li className="flex items-start gap-3"><span className="text-gold mt-1">*</span><span className="text-gray-700"><strong>Customized Hormone and Supplement Therapy</strong> - Prescribed plant based hormone therapy are very good for weight loss and including Metaboost - patented from Spain - specifically designed to lose weight.</span></li>
          </ul>
        </section>
      </div>
    ),
  },
];

export const testimonials = [
  {
    name: "Sarah M.",
    service: "Hormone Systemic Therapy",
    text: "After struggling with hormonal imbalance for years, Montis Specialist Center helped me find balance. Their comprehensive screening and personalized treatment plan changed my life. I feel like myself again!",
    rating: 5,
  },
  {
    name: "James K.",
    service: "Men Up Program",
    text: "The Men Up Program at Montis is exceptional. The team's approach to men's vitality is both professional and effective. I've seen remarkable improvements in my overall health and energy levels.",
    rating: 5,
  },
  {
    name: "Dr. Elena R.",
    service: "Heart via Angiotherapy",
    text: "As a medical professional myself, I was impressed by the scientific rigor behind Montis's angiotherapy program. The results speak for themselves - my cardiovascular health has improved significantly.",
    rating: 5,
  },
  {
    name: "Patricia L.",
    service: "Menopause Management",
    text: "Navigating menopause was challenging until I found Montis Specialist Center. Their compassionate care and effective treatments made this transition so much easier. Highly recommend their menopause program!",
    rating: 5,
  },
  {
    name: "Michael T.",
    service: "Slenderize Program",
    text: "Lost 15kg in 3 months with Montis's slenderize program! The combination of IV therapy, hypoxia training, and nutritional guidance was exactly what I needed. Professional team, amazing results.",
    rating: 5,
  },
  {
    name: "Amanda S.",
    service: "Digestive Health",
    text: "Years of digestive issues resolved after just a few sessions at Montis. Their Gut+ probiotic and colon hydrotherapy program worked wonders. My gut health has never been better!",
    rating: 5,
  },
  {
    name: "David H.",
    service: "Heart via Angiotherapy",
    text: "I was skeptical about angiotherapy at first, but the results are undeniable. My chest pain has decreased dramatically, and I have more energy than I've had in years. The team at Montis is incredibly knowledgeable and supportive.",
    rating: 5,
  },
  {
    name: "Lisa Chen",
    service: "Anti-Aging Wellness",
    text: "The anti-aging program at Montis Specialist Center is absolutely transformative. From IV therapies to personalized wellness plans, every detail is thoughtfully designed. I look and feel 10 years younger!",
    rating: 5,
  },
];

export const contactInfo = {
  address: "127 Wellness Boulevard, Suite 300, Medical District",
  phone: "+1 (555) 014-2200",
  email: "hello@montiswellness.com",
  whatsapp: "+1 (555) 014-2201",
  hours: {
    monday: "08:00 - 20:00",
    tuesday: "08:00 - 20:00",
    wednesday: "08:00 - 20:00",
    thursday: "08:00 - 20:00",
    friday: "08:00 - 20:00",
    saturday: "09:00 - 18:00",
    sunday: "10:00 - 16:00",
  },
};
