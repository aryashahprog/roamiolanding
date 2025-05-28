import Layout from '../components/Layout';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import HowItWorks from '../sections/HowItWorks';
import Pricing from '../sections/Pricing';
import AboutTeam from '../sections/AboutTeam';
import CallToAction from '../sections/CallToAction';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <AboutTeam />
      <CallToAction />
    </Layout>
  );
}
