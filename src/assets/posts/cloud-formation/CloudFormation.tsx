import React, { FunctionComponent } from 'react';
import content from './CloudFormation.data';
import SubjectPage from '../../../components/subject-page/SubjectPage';

const CloudFormation: FunctionComponent = () => {
  return (
    <SubjectPage post={content}>
      <p>
        Ever wondered how these wondrous 500,000 tonne masses form and travel across the skyline each day? How come they
        don’t seem to shrink when it rains? Why do they appear angelically white? All great questions, so let’s break it
        down.
      </p>

      <p>
        Clouds primarily consist of water droplets and ice crystals, small and light enough to float in the air; but how
        did the water vapour get up there in the first place?
      </p>

      <p>
        When water particles are heated to a sufficient degree, they transform into a gas known as water vapour through
        the course of evaporation. During this transformation, the water vapour is able to absorb heat particles from
        their source, cooling the original source down in the process. However, there’s an issue. Air can only hold a
        specific amount of water vapour at any given time, dependant on its temperature and weight – known as
        atmospheric pressure, and given higher temperatures and atmospheric pressure, a greater quantity can be
        maintained. However, once it reaches its maximum threshold – known as the dew point - if a drop in temperature
        or atmospheric pressure occurs, the only option is for this water vapour to convert from gas to liquid, via the
        process of condensation.
      </p>

      <p>
        The newly condensed water particles can cling onto the billions of tiny particles that are travelling in the air
        at any given time – usually a piece of pollen or dust, collecting at a central point known as the condensation
        nuclei. These small masses have a radius between a few microns (thousandths of a millimetre) to a few tens of
        microns. When billions of these particles collect together they form a cloud. As these particles are so
        minuscule, they are lightweight enough to not have any appreciable fall velocity, meaning they remain floating
        in the air.
      </p>

      <p>
        This however, still doesn’t explain how rain-showers occur. As the water droplets in a cloud collide whilst
        moving in the air, they start to gain greater mass up to a tipping point where they are no longer able to freely
        float in the air and gravity begins to take control. If these droplets are sufficiently large enough when
        leaving the cloud (0.1 millimetres in diameter) they can survive the fall to earth without evaporating in the
        process. Yet, this only results in what we recognise commonly as drizzle in Europe.
      </p>

      <p>
        Surprisingly, temperatures at cloud level are usually below 0ºC, yet the water droplets can remain in liquid
        form by a process known as super cooling. This is because water can exist as liquid if there are no nucleation
        centres – points for it to condense at. However, small collisions or the presence of a suitable ice nuclei can
        cause the water droplets to freeze solid. Water vapour can more easily condense onto these frozen particles,
        allowing them to grow faster than their surrounding compatriots and in turn fall sooner. As they fall through
        warmer layers of the air they begin to melt, and eventually reach the ground as heavy rain. Amazingly, if these
        particles form in a sufficiently thick cloud they can reach the ground before melting, leading to what we refer
        to as hail or sleet.
      </p>

      <p>
        Now onto the final question, why do they appear white? The primary reason is that light transmitted from the sun
        is white. To expand further, visible light travels as a wave (part of the electromagnetic spectrum); which when
        spread out – such as a rainbow - allows us to perceive every viewable colour (disregarding black as that occurs
        through the absence of colour). Each of these visible colours has a different wavelength (e.g. blue has the
        shortest wavelength at around 400 nanometres, whilst red is the longest at 700 nanometres). Smaller particles
        are able to scatter shorter wavelengths present in the atmosphere around 16 times more efficiently than longer
        ones – making the sky appear blue, whilst larger particles such as water droplets scatter all wavelengths
        relatively equally meaning no colour predominates – this is known as Mie Scattering. This means that to the
        human eye, clouds appear white.
      </p>

      <p>
        This may raise one final question. So why do some clouds (normally before it rains) appear grey? When light
        initially hits the water droplets gathered in a cloud, the light particles reflect back towards the sun or
        scatter to the sides of the cloud, making the base (the perceivable side from the ground) of the cloud appear
        grey. This is accentuated in rain clouds, where the condensation nuclei are larger, meaning less light from the
        sun reaches the bottom of a cloud. This explains why if you’ve been on a flight, as the plane reaches its
        maximum altitude all the clouds below appear to be pearly white.
      </p>

      <p>
        So next time you’re on the way to work on a rainy day, you can give the scientific explanation to your boss as
        to why you’re soaked through.
      </p>
    </SubjectPage>
  );
};

export default CloudFormation;
