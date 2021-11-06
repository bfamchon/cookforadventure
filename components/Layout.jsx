import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Modal from 'components/Modal';
import Newsletter from 'components/Newsletter';
import SectionParagraph from 'components/section/paragraph';

const Layout = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    const showEmailModal = setTimeout(() => setShowModal(true), 20000);
    return () => {clearTimeout('showEmailModal'); setShowModal(false)};
  }, []);
  return (
    <>
      <Navbar />
      {children}
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          title={"Non, ce n'est pas un code promo."}
        >
          <SectionParagraph center>Mais c'est encore mieux !</SectionParagraph>
          <SectionParagraph center>Dans cette newsletter, je te partage <strong>mes meilleurs conseils</strong> pour préparer tes prochaines aventures !</SectionParagraph>
          <SectionParagraph center>Alimentation, équipement, nouvelles sorties... Tu en seras <strong>le premier informé</strong> !</SectionParagraph>
          <SectionParagraph center>Alors... Partage moi ta meilleure adresse mail et, on y va ?!</SectionParagraph>
          <Newsletter />
        </Modal>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
