import { LongReadBlock } from "@/components/elements/LongReadBlocks";
import "./style.css";
import { QuoteBlock } from "@/components/elements/LongReadBlocks/QuoteBlock";
import { ImageBlock } from "@/components/elements/LongReadBlocks/ImageBlock";
import { LinkBlock } from "@/components/elements/LongReadBlocks/LinkBlock";
import { FactBlock } from "@/components/elements/LongReadBlocks/FactBlock";

const quote =
  "Мещера - остаток лесного океана.\n\n\n Мещёрские леса величественны, как кафедральные соборы По сухим сосновым борам идешь, как по глубокому дорогому ковру, - на километры земля покрыта сухим, мягким мхом. Простым глазом видны мощные воздушные токи. Они подымаются от земли к небу. Облака тают, стоя на месте. Сухое дыхание лесов и запах можжевельника, должно быть, доносятся и до самолетов. \n\n\nКонстантин Паустовский";

export const LongRead = () => {
  return (
    <section className="grid_layout">
      <div className="logread_wrapper">
        <div className="longread_body">
          <LongReadBlock>
            <div>
              Рязанская область, как инь и ян, разделена на две половины рекой
              Окой. Большее по территории правобережье широко развернулось
              лесостепной зоной. Здесь бескрайние поля, затянутые ярким
              ароматным разнотравьем, чередуются с островками лиственного леса.
            </div>
            <div>
              Левобережье Оки заповедное, по преимуществу хвойное, богато
              водными притоками, манит рыбой, дичью, грибами. Именно тут
              раскинулась воспетая Константином Паустовским Мещёра.
            </div>
            <ImageBlock
              srcImg={
                "https://s3-alpha-sig.figma.com/img/ab09/6574/3c6b4eaf7aed54992a017f8b04175a3f?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N1LRV9kp~5T1nuaEQgFPV9BttjCYViG-S2MJ-jNH-rArcJ5W7~qCOMo2iqlDZ~YWkFlZ7xPICpIZMN9fVso0wVckAu11FUREj6TeuAOYqF0hAfyR9elz5xQ5CLr3TYGJ-qUVBr6Kx9C-~ZBMnfZUpSqVAZx7cpNOYv1aYjZ82dpNSY7SSVcAtwyLRPUfzFeV7ttg4rWB7-uPXaOO-RsHKy6Tb81EpHWpSHBqtBhC5Kj9y4Yp3WPkn2kq20~~K-gqkfsVzAOPbekhNVjBNNXSZ~QohwwuCDpx6dgDTo2byeB2FlejupnK3WVzAz5OLIairjFVsPBCHosENmtNQmJ4-g__"
              }
            />
            <LinkBlock
              title="Мемориальный дом-музей И.П.Пожалостина"
              desc="Рязань, пос. Солотча, Порядок, 76, +7 (4912) 28 75 65, +7 (4912) 28 82 03"
              link="https://developer.mozilla.org/ru/docs/Web/CSS/object-fit"
              srcImg="https://s3-alpha-sig.figma.com/img/9f77/23cf/5c5d91a73265020004452970064b11b4?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iiXnRxDFYuBrXlNRFGaUFiDfU2A92f8o299uacL~NGXuhhwG1o2AJpPYoUB0ZhggCvML1RXxsi8SBVIbyF6urKsPdj-DgYTREaJIk3mCv8jisJ9jdU2-aWwIh-6TDiwVn8HzG9PTyapgqd67STxJ92Qbp3VL0SfB9TciGQh8pNnyyPLnb9ZqnXLx9gqqSdu7mPPucyXr5id4p7eXjI7r6Ot~8yOaU1ryE~ZGjodT8KZd5Uy0e0p2fl7SnaN9VbmkitteUA2UeurhVFuHBP2OchcgbM04VxOku0VsyULh5abxqyISqSmdNmmilXUsLzMwqEvIx6J-WMHbtMeDG8MJ3Q__"
            />
          </LongReadBlock>
          <FactBlock fact="В годы Великой Отечественной войны в кремле располагалась одна из огневых точек противовоздушной обороны города. К счастью, немецкие бомбардировки древние постройки не задели. В советские годы кремль превратили в музейный комплекс." />
          <QuoteBlock>{quote}</QuoteBlock>
        </div>
        <div>
        <div className="longread_sidebar">
          <>Разделы</>
        </div>
        </div>
      </div>
    </section>
  );
};
