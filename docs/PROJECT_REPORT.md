# Roamly: Tourism Discovery and Trip-Planning Frontend

## 1. General Overview and Application Area

Roamly is a concept for a tourism discovery website that helps users explore destinations, browse travel experiences, save places, and create a simple first-draft trip plan. The project belongs to the tourism and travel-planning domain. It is designed as a frontend prototype rather than a full booking platform.

The intended audience includes students, independent travellers, couples, and small groups who want to compare travel ideas without starting with a long list of booking decisions. The visual identity uses a restrained black, white, and red palette, strong typography, destination photography, and clear calls to action. The goal is to keep the interface recognisable, modern, and relatively easy to navigate.

The application contains five main routes:

- **Home:** introduces the product, offers destination search, and shows featured places and travel styles.
- **Destinations:** presents a catalogue with text search and travel-style and region filters.
- **Experiences:** presents activities in categories such as nature, food, water, and culture.
- **Trip Planner:** collects destination, duration, number of travellers, budget style, and interests to generate a rough planning snapshot.
- **About:** explains the project idea, compares existing services at a high level, and discusses key risks.

The frontend uses React, Vite, and React Router. Reusable components include the shared header and footer, section headings, destination cards, and experience cards. Destination and experience details are provided by local mock data. Saved destinations persist in `localStorage`. The trip-planner estimate is illustrative and is not connected to live prices or a booking system.

## 2. Problem Statement

Planning a trip can involve many different tasks: deciding where to go, checking the type of experience available, considering the length of a stay, setting a rough budget, and keeping track of interesting places. Travellers often move between inspiration websites, review platforms, accommodation services, maps, and activity catalogues. These services can be useful, but switching between different tools can make the first planning stage feel fragmented.

The problem addressed by Roamly is not a lack of travel information. It is the difficulty of turning a broad idea such as “I want a short outdoor break” into a manageable shortlist and a simple first plan. New travellers may also be unsure what kind of trip suits their time, budget, or interests.

Roamly proposes a lightweight starting point. Users can search and filter a small curated set of destinations, save favourites, explore different types of experiences, and use a trip planner to estimate a draft budget. The interface aims to reduce unnecessary complexity by keeping the main actions visible and separating browsing from planning.

For this educational prototype, the problem is addressed at the level of interface design and frontend interaction. The project does not claim that the interface has been validated by user testing, and it does not replace professional travel advice, booking services, or current destination information.

## 3. Analogue Analysis: Advantages and Limitations

The comparison below identifies the primary focus of three established travel services and uses them as reference points for the Roamly concept. It is a high-level product comparison, not a complete usability evaluation.

| Analogue | Main focus | Advantages (+) | Limitations for Roamly's intended use (−) |
| --- | --- | --- | --- |
| Booking.com | Accommodation search, availability, and reservations | A mature search-and-filter model and a clear path toward accommodation booking. | Its accommodation-first workflow is not specifically designed as a lightweight inspiration-to-first-plan experience. |
| Tripadvisor | Traveller reviews, attractions, restaurants, and things to do | Broad review content and multiple ways to discover places and activities. | The breadth of content can be more than a user needs when they are only beginning to shape an idea. |
| GetYourGuide | Tours, tickets, and activities | Activity categories and specific experiences can help travellers decide what to do at a destination. | It is more activity-focused than Roamly's proposed overview of destination discovery, saved places, and rough trip planning. |

The project borrows familiar interaction patterns from these services—search, filters, cards, categories, and clear action links—without attempting to reproduce their full business functionality. Roamly's intended distinction is its small curated dataset and short route from exploring a destination to creating an initial plan. The idea should be evaluated through usability testing before making strong claims about its effectiveness.

Official reference websites:

- Booking.com: https://www.booking.com/
- Tripadvisor: https://www.tripadvisor.com/
- GetYourGuide: https://www.getyourguide.com/

## 4. Main Risks

**Risk 1: Inaccurate or outdated travel information.** Destination descriptions, ratings, dates, availability, and prices can change. A user could be misled if example values look like live offers. The prototype therefore labels the planner's budget as a mock estimate and should clearly retain this limitation. A production system would need a reliable data source, timestamps, currency labels, and a routine for updating information.

**Risk 2: Choice overload.** Adding too many destinations, categories, and settings can undermine the goal of a simple interface. The current prototype uses a limited destination catalogue and basic filters. Future development should use task-based usability testing to learn whether users can find a suitable place quickly, and simplify the information architecture where needed.

**Risk 3: Accessibility and responsive behaviour.** A visually strong design can still be difficult to use on a small screen or with assistive technology. The frontend includes responsive layouts, semantic headings, labels for form controls, descriptive image alternatives, and a reduced-motion preference. These measures are a starting point; keyboard and screen-reader testing should be performed before release.

**Risk 4: Privacy and data security.** Saved destinations are stored in browser `localStorage`; no account or server-side profile exists in this prototype. Local storage is not suitable for secrets or sensitive personal data. If accounts, personal itineraries, or payments are added, the application will require secure server-side controls, appropriate consent, and a privacy policy.

**Risk 5: External asset availability and licensing.** Remote images and fonts rely on external services and internet access. Assets can fail to load or have licensing constraints. A production release should verify usage rights, define image fallbacks, and consider hosting approved assets locally.

## 5. Proposed Solution and Implementation

Roamly implements a compact responsive frontend using React and Vite. React Router provides five main routes and a not-found page. A shared layout keeps the header, active navigation, saved-place count, and footer consistent. Reusable components reduce duplicated markup and make styling easier to maintain.

The destination catalogue reads from a local JavaScript data file. The search field matches destination name, country, description, or travel style. Users can filter by travel style and region, and favourite destinations can be saved or removed. The saved-place list persists in the browser between refreshes. The experiences page uses category buttons to filter activity cards.

The trip planner provides controls for destination, number of days, traveller count, preferred comfort level, and interests. It generates a rough estimate using simple demonstration rates and a destination-level base amount. The estimate is intentionally labelled as mock data because there is no live price API, authentication, database, payment process, or booking capability.

The design uses a black, white, and red palette with high-contrast buttons, large editorial headings, image-led destination cards, and responsive grids. The interface adapts to desktop, tablet, and mobile screens. The repository includes a README with setup instructions and Git commands so the project can be installed and pushed to GitHub.

### Implementation criteria checklist

1. **UX/UI:** responsive styling across all five pages, consistent visual language, clear active navigation, visible primary actions, and mobile-friendly layouts.
2. **Frontend:** functional React frontend with at least five content pages, React Router, navigation bar, shared layout, reusable components, and mock data.
3. **Interactions:** destination search and filters, experience-category filtering, saved places, and a trip planner with a sample budget estimate.
4. **Documentation:** README includes project purpose, route list, feature summary, installation steps, production build commands, and mock-data limitations.
5. **Git readiness:** the folder structure and suggested commands support initialisation of a Git repository and publishing to GitHub.

## Conclusion

Roamly is an educational tourism frontend focused on the early stage of travel planning. It combines a small destination catalogue, activity discovery, saved places, and a simple planning estimate in one responsive interface. Established travel services provide useful reference patterns, while Roamly explores a more curated route from inspiration to a first-draft plan. The prototype demonstrates the required frontend structure and interactions, but it should not be represented as a live travel agency. The next steps would be usability testing, verified data sources, more complete accessibility checks, and—if required—backend integration for accounts, live information, and bookings.
