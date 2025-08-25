import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';

const LegalPage: React.FC = () => {
  const { currentThemeConfig } = useTheme();

  return (
    <Box sx={{ py: 4, backgroundColor: currentThemeConfig.background, minHeight: '100vh' }}>
      <Container maxWidth="md">
        <Box sx={{
          backgroundColor: currentThemeConfig.paper,
          border: `1px solid ${currentThemeConfig.primary}33`,
          borderRadius: 1,
          p: 3
        }}>
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: currentThemeConfig.textPrimary }}>
            Mentions légales
          </Typography>

          <Typography variant="body2" sx={{ color: currentThemeConfig.textSecondary, lineHeight: 1.8, fontSize: '0.85rem' }}>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Éditeur du site :</strong><br/>
            Le présent site est édité par Unforkable<br/>
            Société à responsabilité limitée<br/>
            Capital social de 1500€<br/>
            Siège social : 1 Place Jules Verne 49000 ANGERS<br/>
            907 896 286 R.C.S. Angers<br/>
            TVA intracommunautaire : FR68907896286<br/>
            Email : contact_AT_unforkable.co<br/>
            Directeur de la publication : Unforkable
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Hébergeur :</strong><br/>
            Le site est hébergé par Netlify<br/>
            Adresse : 44 Montgomery St Suite 300, San Francisco, California 94104, US
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Conditions d'utilisation</strong><br/>
            <em>Objet du site :</em> Ce site a pour finalité de présenter l’activité de la société Unforkable. Il permet notamment aux utilisateurs de prendre contact via un formulaire de contact.
            <br/>
            <em>Propriété intellectuelle :</em> Le site et chacun des éléments, y compris mais sans limitation les marques, les logos, icônes, infographies, photographies, qui le composent sont protégés au titre de la législation internationale de la propriété intellectuelle. Les contenus figurant sur le site sont la propriété d’Unforkable ou d’autres entreprises. Toute utilisation, reproduction ou représentation, par quelque procédé que ce soit, et sur quelque support que ce soit, de tout ou partie du site et/ou des éléments qui le composent n'est pas autorisée sans le consentement expresse d'Unforkable.
            <br/>
            <em>Loi applicable :</em> Les présentes conditions sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de la société.
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Utilisation du site</strong><br/>
            <em>Visite du site :</em> D'une façon générale, visiter ce site Internet ne nécessite pas de décliner son identité ni de fournir des informations personnelles.
            <br/>
            <em>Cookies :</em> Le site n’utilise aucun cookie non essentiel. Seuls les cookies techniques nécessaires au bon fonctionnement du site peuvent être utilisés.
            <br/>
            <em>Utilisation du formulaire de contact :</em> Les utilisateurs peuvent envoyer une demande via le formulaire de contact. Les données saisies (nom, prénom, email, contenu du message) sont strictement utilisées pour répondre à la demande de l'utilisateur. Elles ne font l'objet d'aucune réutilisation, ne sont pas conservées au-delà du traitement, et ne sont jamais transmises à des tiers.
            <br/><br/>
            <strong style={{ color: currentThemeConfig.textPrimary }}>Politique de confidentialité</strong><br/>
            <em>Données personnelles collectées :</em> Les seules données personnelles collectées le sont via le formulaire de contact. Aucune autre donnée n’est collectée automatiquement (pas de cookie de traçage ou de publicité).
            <br/>
            <em>Finalité du traitement</em><br/>Les données sont utilisées exclusivement dans le but de répondre à la demande envoyée via le formulaire de contact.
            <br/>
            <em>Base légale du traitement :</em> Conformément à l’article 6 du RGPD, la base légale du traitement est le consentement explicite donné par l’utilisateur au moment de l’envoi du formulaire.
            <br/>
            <em>Durée de conservation :</em> Les données sont supprimées dans un délai maximum de 3 mois après traitement de la demande.
            <br/>
            <em>Droits de l'utilisateur :</em> L’utilisateur peut à tout moment exercer ses droits : droit d’accès ; droit de rectification ; droit à l’effacement ; droit à la limitation ; droit d’opposition. En écrivant à : legal_AT_unforkable.co
            <br/>
            <em>Sécurité des données :</em> La société met en œuvre des mesures de sécurité techniques et organisationnelles pour protéger les données contre toute perte, altération ou accès non autorisé.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LegalPage;


