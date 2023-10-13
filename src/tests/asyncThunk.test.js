import { API_ENDPOINTS } from 'config/api';
import { thunk as t } from 'store/books/booksReducer';

global.fetch = jest.fn();

const mockBooks = {
  kind: 'books#volumes',
  totalItems: 247,
  items: [
    {
      kind: 'books#volume',
      id: 'bWV2EAAAQBAJ',
      etag: 'SZBHj9u2m9A',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/bWV2EAAAQBAJ',
      volumeInfo: {
        title: 'Handbook of Research on Mathematical Modeling for Smart Healthcare Systems',
        authors: ['Samanta, Debabrata', 'Singh, Debabrata'],
        publisher: 'IGI Global',
        publishedDate: '2022-06-24',
        description:
          'Advances in healthcare technologies have offered real-time guidance and technical assistance for diagnosis, monitoring, operation, and interventions. The development of artificial intelligence, machine learning, internet of things technology, and smart computing techniques are crucial in today’s healthcare environment as they provide frictionless and transparent financial transactions and improve the overall healthcare experience. This, in turn, has far-reaching effects on economic, psychological, educational, and organizational improvements in the way we work, teach, learn, and provide care. These advances must be studied further in order to ensure they are adapted and utilized appropriately. The Handbook of Research on Mathematical Modeling for Smart Healthcare Systems presents the latest research findings, ideas, innovations, developments, and applications in the field of modeling for healthcare systems. Furthermore, it presents the application of innovative techniques to complex problems in the case of healthcare. Covering a range of topics such as artificial intelligence, deep learning, and personalized healthcare services, this reference work is crucial for engineers, healthcare professionals, researchers, academicians, scholars, practitioners, instructors, and students.',
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9781668445822',
          },
          {
            type: 'ISBN_10',
            identifier: '1668445824',
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 503,
        printType: 'BOOK',
        categories: ['Computers'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=bWV2EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=bWV2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink: 'http://books.google.ru/books?id=bWV2EAAAQBAJ&pg=PA330&dq=xqw+subject:&hl=&cd=11&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=bWV2EAAAQBAJ&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=bWV2EAAAQBAJ',
      },
      saleInfo: {
        country: 'RU',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 46850.8,
          currencyCode: 'RUB',
        },
        retailPrice: {
          amount: 46850.8,
          currencyCode: 'RUB',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=bWV2EAAAQBAJ&rdid=book-bWV2EAAAQBAJ&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 46850800000,
              currencyCode: 'RUB',
            },
            retailPrice: {
              amountInMicros: 46850800000,
              currencyCode: 'RUB',
            },
          },
        ],
      },
      accessInfo: {
        country: 'RU',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.ru/books/download/Handbook_of_Research_on_Mathematical_Mod-sample-pdf.acsm?id=bWV2EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        webReaderLink: 'http://play.google.com/books/reader?id=bWV2EAAAQBAJ&hl=&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          '... \u003cb\u003eSubject\u003c/b\u003e to the following constraints : f ( 0 ) = 0 , f &#39; ( 0 ) = 1 , 0 ( 0 ) = 1 , ° ( 0 ) = 1 ; = = = = ( 11 ) f ... \u003cb\u003exqw\u003c/b\u003e K ( T. - T . ) ? ( 13 ) 1 Dp ( C.-C. ) 0 B 2 PUP Where the Skin friction on flat plate is tw the heat flux is qw&nbsp;...',
      },
    },
  ],
};

const params = {
  search: 'js',
  category: 'computers',
  orderBy: 'newest',
};

const error = 'Response error: cant load a data';

const dispatch = jest.fn();

describe('redux async thunks', () => {
  // FULFILLED
  it('should fetchBooks with fulfilled response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockBooks),
    });
    const thunk = t.fetchBooks(API_ENDPOINTS.addBooks.createRoot(params.search, params.category, params.orderBy));
    await thunk(dispatch);
    const { calls } = dispatch.mock;
    expect(calls).toHaveLength(2);
    const [start, end] = calls;
    expect(start[0].type).toBe(t.fetchBooks.pending().type);
    expect(end[0].type).toBe(t.fetchBooks.fulfilled().type);
    expect(end[0].payload).toBe(mockBooks);
  });

  it('should fetchMoreBooks with fulfilled response', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockBooks),
    });

    const thunk = t.fetchMoreBooks(API_ENDPOINTS.addBooks.createRoot(params.search, params.category, params.orderBy));

    await thunk(dispatch);

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(t.fetchMoreBooks.pending().type);
    expect(end[0].type).toBe(t.fetchMoreBooks.fulfilled().type);
    expect(end[0].payload).toBe(mockBooks.items);
  });

  // REJECTED
  it('should fetchBooks with rejected response', async () => {
    fetch.mockResolvedValue({
      ok: false,
    });

    const thunk = t.fetchBooks(API_ENDPOINTS.books.createRoot(params.search, params.category, params.orderBy));

    await thunk(dispatch);

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(t.fetchBooks.pending().type);
    expect(end[0].type).toBe(t.fetchBooks.rejected().type);
    expect(end[0].payload).toBe(error);
    expect(end[0].meta.rejectedWithValue).toBe(true);
  });

  it('should fetchMoreBooks with rejected response', async () => {
    const params = {
      search: 'js',
      category: 'computers',
      orderBy: 'newest',
    };

    fetch.mockResolvedValue({
      ok: false,
    });

    const thunk = t.fetchMoreBooks(API_ENDPOINTS.addBooks.createRoot(params.search, params.category, params.orderBy));

    await thunk(dispatch);

    const { calls } = dispatch.mock;

    expect(calls).toHaveLength(2);

    const [start, end] = calls;

    expect(start[0].type).toBe(t.fetchMoreBooks.pending().type);
    expect(end[0].type).toBe(t.fetchMoreBooks.rejected().type);
    expect(end[0].payload).toBe(error);
    expect(end[0].meta.rejectedWithValue).toBe(true);
  });
});
