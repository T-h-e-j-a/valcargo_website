const fs = require('fs');
let content = fs.readFileSync('src/app/App.tsx', 'utf8');

const getQuoteNavRegex = /<button\s*onClick=\{[^\}]+\}\s*className="text-white font-bold uppercase tracking-widest text-xs px-5 py-2\.5 rounded-lg transition-all duration-200 hover:scale-105"\s*style=\{\{\s*backgroundColor: ORANGE\s*\}\}\s*>\s*Get Quote\s*<\/button>/;
content = content.replace(getQuoteNavRegex, '');

content = content.replace(/const \[form, setForm\] = useState\(\{[\s\S]*?\}\);\s*const \[submitted, setSubmitted\] = useState\(false\);\s*const \[loading, setLoading\] = useState\(false\);\s*const handleSubmit = [\s\S]*?1200\);\s*\};\s*const inputClass =[\s\S]*?bg-white";/g, '');

content = content.replace('<SectionHeading>REQUEST A QUOTE</SectionHeading>', '<SectionHeading>CONTACT US</SectionHeading>');

content = content.replace('className="grid grid-cols-1 lg:grid-cols-2 gap-14"', 'className="grid grid-cols-1 gap-14 max-w-3xl mx-auto"');

content = content.replace('{"LET\\'S TALK LOGISTICS"}', '{"COMPANY DETAILS"}');

content = content.replace('Our freight experts are ready to design a shipping solution\n                  tailored to your business needs. Get a competitive quote\n                  within 24 hours.', 'Please reach out to us for enquiries, shipment coordination, and logistics support.');

const oldDescRegex = /Our freight experts are ready to design a shipping solution[\s\S]*?within 24 hours\./;
content = content.replace(oldDescRegex, 'Please reach out to us for enquiries, shipment coordination, and logistics support.');

const rightFormRegex = /<FadeIn direction="right" delay=\{0\.15\}>[\s\S]*?<\/form>\s*<\/FadeIn>/;
content = content.replace(rightFormRegex, '');

fs.writeFileSync('src/app/App.tsx', content, 'utf8');