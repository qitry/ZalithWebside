import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: <Zap size={24} />,
      title: t('hero.speed'),
      description: t('hero.speedDesc')
    },
    {
      icon: <ShieldCheck size={24} />,
      title: t('hero.safe'),
      description: t('hero.safeDesc')
    },
    {
      icon: (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          </svg>
        </motion.div>
      ),
      title: t('hero.custom'),
      description: t('hero.customDesc')
    }
  ];

  return (
    <section className="relative overflow-hidden flex flex-col items-center min-h-screen pt-16 md:pt-16">
      <div className="hero-glow" />

      <div className="flex-grow flex items-center w-full py-12 md:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[var(--brand)]/10 text-[var(--brand)] mb-6 md:mb-8 border border-[var(--brand)]/20">
                <Zap size={14} className="mr-2" /> {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-tight text-[var(--text-1)]"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--text-2)] mb-8 md:mb-12"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/download" className="btn-primary flex items-center gap-2 text-lg w-full sm:w-auto justify-center">
                {t('common.download')} <Download size={20} />
              </Link>
              <a href="https://www.zalithlauncher.cn/docs/projects/zl2" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full border border-[var(--divider)]/50 hover:bg-[var(--bg-alt)] transition-all flex items-center gap-2 text-lg text-[var(--text-1)] w-full sm:w-auto justify-center">
                {t('common.viewDocs')} <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-[var(--brand)]/10 text-[var(--brand)] rounded-xl flex items-center justify-center mb-5">
                {stat.icon}
              </div>
              <h3 className="font-bold text-xl mb-3 text-[var(--text-1)]">{stat.title}</h3>
              <p className="text-[var(--text-2)]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[var(--divider)] rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-[var(--brand)] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
