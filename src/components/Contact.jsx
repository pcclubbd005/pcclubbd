import { SITE } from '@/data/site';

export default function Contact() {
  const b = 'font-display font-extrabold';
  const link = 'underline underline-offset-4 decoration-1 hover:text-cable transition-colors';

  return (
    <div id="contact" className="space-y-3">
      <h2 className="h2">Visit or call</h2>

      <p>
        <b className={b}>Address</b>
        <br />
        {SITE.addr}
      </p>

      <p>
        <b className={b}>Hours</b>
        <br />
        Saturday to Thursday, 10 AM–8 PM
        <br />
        Friday closed
      </p>

      <p>
        <b className={b}>Phone</b>
        <br />
        <a className={link} href={`tel:${SITE.tel}`}>{SITE.phone}</a>
        <br />
        {SITE.pbx}
      </p>

      <p>
        <b className={b}>Email</b>
        <br />
        <a className={link} href={`mailto:${SITE.support}`}>{SITE.support}</a>
        <br />
        <a className={link} href={`mailto:${SITE.mona}`}>{SITE.mona}</a>
      </p>
    </div>
  );
}