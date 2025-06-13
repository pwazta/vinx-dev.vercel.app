import { PageContainer, PageWrapper } from '../Style/StyledComponents';
import { motion } from 'framer-motion';
// Wraps the page in a screen-wide background colour and puts content into an animated bootstrap container
export default function Page({bg, children, ...rest }) {
  return (
    <PageWrapper $bg={bg} {...rest}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <PageContainer>
          {children}
        </PageContainer>
      </motion.div>
    </PageWrapper>
  );
}