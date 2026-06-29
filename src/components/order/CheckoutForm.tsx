'use client';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import styles from './CheckoutForm.module.css';

type CheckoutData = {
  name: string;
  email: string;
  address: string;
  card: string;
  expiry: string;
  cvc: string;
};

export function CheckoutForm({ total }: { total: number }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CheckoutData>();
  const { clearCart } = useCart();
  const router = useRouter();

  const onSubmit = async (data: CheckoutData) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Order placed:', data);
    clearCart();
    toast.success('Order placed successfully! Check your email for confirmation.', { duration: 5000 });
    router.push('/');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.section}>
        <h3>Delivery Details</h3>
        <div className={styles.inputGroup}>
          <label>Full Name</label>
          <input {...register("name", { required: true })} className={styles.input} />
          {errors.name && <span className={styles.error}>Required</span>}
        </div>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input type="email" {...register("email", { required: true })} className={styles.input} />
          {errors.email && <span className={styles.error}>Required</span>}
        </div>
        <div className={styles.inputGroup}>
          <label>Delivery Address</label>
          <textarea rows={3} {...register("address", { required: true })} className={styles.input} />
          {errors.address && <span className={styles.error}>Required</span>}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Payment (Dummy)</h3>
        <div className={styles.inputGroup}>
          <label>Card Number</label>
          <input placeholder="0000 0000 0000 0000" {...register("card", { required: true })} className={styles.input} />
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Expiry Date</label>
            <input placeholder="MM/YY" {...register("expiry", { required: true })} className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label>CVC</label>
            <input placeholder="123" {...register("cvc", { required: true })} className={styles.input} />
          </div>
        </div>
      </div>

      <Button type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Processing...' : `Pay €${total.toFixed(2)}`}
      </Button>
    </form>
  );
}
