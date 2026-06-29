'use client';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Contact data:', data);
    toast.success('Message sent successfully!');
    reset();
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>We&apos;d love to hear from you. Reach out for reservations, feedback, or general inquiries.</p>
      </header>

      <section className={styles.content}>
        <div className={styles.container}>
          
          <div className={styles.modernSplit}>
            <div className={styles.splitImageContainer}>
              <img src="/images/hero-pils.png" alt="Reservations" className={styles.splitImage} />
            </div>
            
            <div className={styles.splitFormContainer}>
              <SectionEyebrow>Table Reservations</SectionEyebrow>
              <h2>Book your <i>Experience</i></h2>
              <p className={styles.splitText}>Join us at Römer Pils Brunnen for a memorable evening of authentic German hospitality and freshly roasted specialties.</p>
              
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input id="name" {...register("name", { required: true })} className={styles.input} />
                  {errors.name && <span className={styles.error}>Required</span>}
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" {...register("email", { required: true })} className={styles.input} />
                  {errors.email && <span className={styles.error}>Required</span>}
                </div>
                
                <div className={styles.row}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" {...register("subject")} className={styles.input} />
                  </div>
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} {...register("message", { required: true })} className={styles.input} />
                  {errors.message && <span className={styles.error}>Required</span>}
                </div>
                
                <Button type="submit" fullWidth disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          <div className={styles.locationGrid}>
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <SectionEyebrow>Location</SectionEyebrow>
                <h3>Römer Pils <i>Brunnen</i></h3>
                <p>Töngesgasse 19<br/>60311 Frankfurt am Main<br/>Germany</p>
                <p className={styles.phoneText}><strong>Phone:</strong> +49 69 28 77 12<br/><strong>Email:</strong> info@roemerpilsbrunnen.de</p>
              </div>

              <div className={styles.infoBlock}>
                <SectionEyebrow>Hours</SectionEyebrow>
                <table className={styles.table}>
                  <tbody>
                    <tr>
                      <td>Monday - Sunday</td>
                      <td>10:00 - 24:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className={styles.mapCol}>
              <iframe 
                width="100%" 
                height="100%" 
                className={styles.mapIframe}
                src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=T%C3%B6ngesgasse%2019,%2060311%20Frankfurt%20am%20Main+(R%C3%B6merpilsbrunnen)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
