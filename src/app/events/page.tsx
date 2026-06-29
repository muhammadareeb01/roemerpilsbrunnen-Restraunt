'use client';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

type InquiryForm = {
  name: string;
  email: string;
  date: string;
  guests: string;
  type: string;
  message: string;
};

export default function EventsPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<InquiryForm>();

  const onSubmit = async (data: InquiryForm) => {
    // Dummy submit
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form data:', data);
    toast.success('Inquiry sent! We will contact you shortly.');
    reset();
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Private Events & Dining</h1>
          <p className={styles.subtitle}>
            From intimate family gatherings to festive celebrations, Römer Pils Brunnen offers the perfect traditional setting for your next event.
          </p>
        </div>
      </section>

      <section className={styles.offerings}>
        <div className={styles.container}>
          <SectionEyebrow>Our Packages</SectionEyebrow>
          <h2 className={styles.sectionTitle}>Curated <i>Experiences</i></h2>
          
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.bentoLarge}`}>
              <div className={styles.bentoContent}>
                <h3>Family Celebrations</h3>
                <p>Celebrate birthdays, anniversaries, or milestones in our cozy restaurant rooms with customized menus for up to 40 guests.</p>
              </div>
              <div className={styles.bentoImageWrapper}>
                 <img src="/images/frankfurt-plate.png" alt="Family Banquets" className={styles.bentoImage} />
              </div>
            </div>
            
            <div className={styles.bentoCard}>
              <div className={styles.bentoContent}>
                <h3>Corporate Dinners</h3>
                <p>Host local business dinners or team gatherings. We offer hearty Frankfurt specialty menus and fresh draft pilsner beer.</p>
              </div>
            </div>
            
            <div className={styles.bentoCard}>
              <div className={styles.bentoContent}>
                <h3>Traditional Banquets</h3>
                <p>Enjoy our famous roasted Schweinshaxe and seasonal platters served family-style for groups of 10 to 30 guests.</p>
              </div>
            </div>
            
            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
               <div className={styles.bentoContent}>
                  <h3>Full Restaurant Buyout</h3>
                  <p>Book the entire Römer Pils Brunnen for up to 120 seated guests. Enjoy a private bar, customized buffet, and dedicated staff.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.inquiry}>
        <div className={styles.container}>
          <div className={styles.inquiryGrid}>
            <div className={styles.textCol}>
              <SectionEyebrow>Get in touch</SectionEyebrow>
              <h2>Plan your event.</h2>
              <p>Fill out the form with your event details, and our events team will get back to you within 24 hours.</p>
              
              <div className={styles.buyoutBox}>
                <h4>Full Buyout Details</h4>
                <p>Capacity: up to 120 guests seated (150 standing)</p>
                <p>Availability: Monday - Sunday</p>
                <p>Minimum spend applies.</p>
              </div>
            </div>
            
            <div className={styles.formCol}>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input id="name" {...register("name", { required: true })} className={styles.input} />
                  {errors.name && <span className={styles.error}>Name is required</span>}
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" {...register("email", { required: true })} className={styles.input} />
                  {errors.email && <span className={styles.error}>Email is required</span>}
                </div>
                
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="date">Preferred Date</label>
                    <input id="date" type="date" {...register("date", { required: true })} className={styles.input} />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="guests">Est. Guests</label>
                    <input id="guests" type="number" {...register("guests", { required: true })} className={styles.input} />
                  </div>
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="type">Event Type</label>
                  <select id="type" {...register("type")} className={styles.input}>
                    <option value="corporate">Corporate Dinner</option>
                    <option value="wedding">Wedding / Reception</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Additional Details</label>
                  <textarea id="message" rows={4} {...register("message")} className={styles.input} />
                </div>
                
                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
