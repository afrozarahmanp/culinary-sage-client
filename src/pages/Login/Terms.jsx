import { Container } from "react-bootstrap";

const Terms = () => {
    return (
        <Container className="mt-5">
            <div>
                <h1>Terms and Conditions for Food Recipe Website</h1>

                <p>
                    These terms and conditions ("Terms") outline the rules and regulations for using the [Your Website Name] website ("Website"), operated by [Your Company Name] ("Company"). By accessing and using the Website, you accept and agree to comply with these Terms. If you do not agree with these Terms, please do not use the Website.
                </p>

                <h2>Intellectual Property</h2>

                <p>
                    The content published on this Website, including but not limited to recipes, images, text, graphics, videos, and other materials, are protected by intellectual property laws and are the property of the Company or its content providers. Users may not reproduce, distribute, modify, transmit, or use the content for commercial purposes without obtaining prior written consent from the Company.
                </p>

                {/* More sections... */}

                <h2>User Contributions</h2>

                <p>
                    By submitting or posting content, including recipes, reviews, comments, or other materials ("User Contributions"), you grant the Company a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, reproduce, distribute, and display your User Contributions on the Website and in marketing materials.
                </p>

                {/* More sections... */}

                <h2>Disclaimer of Warranties</h2>

                <p>
                    The Company provides content and services on an "as-is" and "as-available" basis. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or suitability of the content on the Website.
                </p>

                {/* More sections... */}

                <h2>Limitation of Liability</h2>

                <p>
                    In no event shall the Company or its affiliates be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with the use of the Website, its content, or services.
                </p>

                {/* More sections... */}

                <h2>Third-Party Links</h2>

                <p>
                    The Website may contain links to third-party websites or resources. These links are provided for your convenience and do not imply endorsement or responsibility by the Company for the content, products, or services offered by third parties. We encourage you to review the terms and privacy policies of these third-party websites.
                </p>

                {/* More sections... */}

                <h2>Privacy Policy</h2>

                <p>
                    Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using the Website, you consent to the practices described in the Privacy Policy.
                </p>

                {/* More sections... */}

                <h2>Governing Law</h2>

                <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
                </p>

                {/* More sections... */}

                <h2>Changes to Terms</h2>

                <p>
                    The Company reserves the right to update or modify these Terms at any time without prior notice. Continued use of the Website after changes are made constitutes your acceptance of the revised Terms.
                </p>
            </div>
        </Container>
    );
};

export default Terms;