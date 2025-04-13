# Dokument wymagań produktu (PRD) - LegoApp

## 1. Przegląd produktu
LegoApp to aplikacja, która ułatwia dzielenie się informacjami o posiadanych zestawach Lego i pozwala innym użytkownikom "zaklepać" zestawy, które chcą kupić jako prezent, zapobiegając dublowaniu. Aplikacja jest skierowana do osób, które chcą uniknąć kupowania powtarzających się zestawów Lego jako prezentów dla znajomych lub dzieci znajomych.

## 2. Problem użytkownika
Kupowanie zestawów Lego jako prezent bywa trudne, zwłaszcza gdy nie wiadomo, jakie zestawy już posiadają obdarowywani. Problemem jest brak centralnego miejsca, gdzie można by sprawdzić, jakie zestawy Lego posiadają znajomi, oraz możliwość rezerwacji zestawów, aby uniknąć dublowania prezentów.

## 3. Wymagania funkcjonalne
- Rejestracja i logowanie użytkowników z użyciem e-maila, nicku i hasła.
- System znajomych z możliwością akceptacji zaproszeń.
- Dodawanie, edytowanie i usuwanie zestawów Lego przez użytkowników.
- Rezerwacja zestawów na miesiąc z możliwością ponownej rezerwacji.
- Widok "Zaklepane prezenty" – użytkownik widzi, co inni dla niego zarezerwowali.
- Mechanizmy podpowiadania numer-nazwa oparte na rozwiązaniach AI.

## 4. Granice produktu
- Brak integracji z mediami społecznościowymi przy logowaniu.
- Brak wersji mobilnej, ale aplikacja powinna być responsywna na urządzeniach mobilnych.
- Nie planuje się użycia narzędzi analitycznych ani śledzenia wskaźników retencji użytkowników.
- Regularne audyty bezpieczeństwa danych będą przeprowadzane.

## 5. Historyjki użytkowników

### US-001
- **Tytuł:** Rejestracja użytkownika
- **Opis:** Jako nowy użytkownik, chcę się zarejestrować, aby móc korzystać z aplikacji.
- **Kryteria akceptacji:**
  - Użytkownik musi podać e-mail, nick i hasło.
  - Użytkownik otrzymuje e-mail z linkiem do potwierdzenia rejestracji.

### US-002
- **Tytuł:** Logowanie użytkownika
- **Opis:** Jako zarejestrowany użytkownik, chcę się zalogować, aby uzyskać dostęp do mojego profilu.
- **Kryteria akceptacji:**
  - Użytkownik podaje poprawne dane logowania.
  - Użytkownik uzyskuje dostęp do swojego profilu po zalogowaniu.

### US-003
- **Tytuł:** Dodawanie zestawu Lego
- **Opis:** Jako użytkownik, chcę dodać zestaw Lego do mojego profilu, aby inni mogli go zobaczyć.
- **Kryteria akceptacji:**
  - Użytkownik podaje nazwę i numer zestawu.
  - Zestaw jest widoczny na profilu użytkownika.

### US-004
- **Tytuł:** Edytowanie zestawu Lego
- **Opis:** Jako użytkownik, chcę edytować szczegóły zestawu Lego na moim profilu.
- **Kryteria akceptacji:**
  - Użytkownik może zmienić nazwę i numer zestawu.
  - Zmiany są zapisywane i widoczne na profilu.

### US-005
- **Tytuł:** Usuwanie zestawu Lego
- **Opis:** Jako użytkownik, chcę usunąć zestaw Lego z mojego profilu.
- **Kryteria akceptacji:**
  - Użytkownik może usunąć zestaw z profilu.
  - Zestaw nie jest już widoczny na profilu.

### US-006
- **Tytuł:** Rezerwacja zestawu Lego
- **Opis:** Jako użytkownik, chcę zarezerwować zestaw Lego jako prezent dla znajomego.
- **Kryteria akceptacji:**
  - Użytkownik wybiera zestaw do rezerwacji.
  - Rezerwacja jest widoczna w widoku "Zaklepane prezenty".

### US-007
- **Tytuł:** Akceptacja zaproszenia do znajomych
- **Opis:** Jako użytkownik, chcę akceptować zaproszenia do znajomych, aby móc dzielić się listą zestawów.
- **Kryteria akceptacji:**
  - Użytkownik otrzymuje powiadomienie o zaproszeniu.
  - Użytkownik może zaakceptować lub odrzucić zaproszenie.

### US-008
- **Tytuł:** Resetowanie hasła
- **Opis:** Jako użytkownik, chcę móc zresetować hasło, jeśli je zapomnę.
- **Kryteria akceptacji:**
  - Użytkownik podaje e-mail, aby otrzymać link do resetowania hasła.
  - Użytkownik może ustawić nowe hasło po kliknięciu w link.

## 6. Metryki sukcesu
- 80% użytkowników dodało co najmniej 5 zestawów do swojego profilu.
- Co najmniej 50% aktywnych użytkowników zaklepało zestaw dla innego użytkownika.
